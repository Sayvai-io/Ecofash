import { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FaComment, FaTimes, FaMicrophone } from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { RetellWebClient } from "retell-client-js-sdk"; // Import Retell SDK

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: String; content: String }[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [activeButton, setActiveButton] = useState<"comment" | "mic">("comment");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const retellWebClient = new RetellWebClient(); // Initialize Retell Web Client
  const [isCallActive, setIsCallActive] = useState(false); // Track call status

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: "user", content: inputMessage }]);
      const currMessage = inputMessage;
      setInputMessage("");

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: currMessage }],
              temperature: 0.7,
              max_tokens: 150,
            }),
          }
        );

        const data = await response.json();
        const aiMessage = data.choices[0].message.content.trim();
        setMessages((prev) => [...prev, { role: "AI", content: aiMessage }]);
      } catch (error) {
        console.error("Error fetching OpenAI API:", error);
        setMessages((prev) => [
          ...prev,
          { role: "AI", content: "Error in getting response" },
        ]);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleActiveButton = () => {
    setActiveButton((prev) => (prev === "comment" ? "mic" : "comment"));
  };

  const startWebCall = async () => {
    try {
      const response = await fetch("/api/create-web-call", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const createCallResponse = await response.json();

      // Check if the response contains the access token
      if (createCallResponse.access_token) {
        // Start the call with the access token
        await retellWebClient.startCall({
          accessToken: createCallResponse.access_token,
        });

        setIsCallActive(true); // Update call status
        console.log("Call started");

        // Listen to call events
        retellWebClient.on("call_started", () => {
          console.log("Call started");
        });

        retellWebClient.on("call_ended", () => {
          console.log("Call ended");
          setIsCallActive(false);
        });

        retellWebClient.on("error", (error) => {
          console.error("An error occurred:", error);
          retellWebClient.stopCall();
        });
      } else {
        console.error("No access token received");
      }
    } catch (error) {
      console.error("Error starting web call:", error);
    }
  };

  const stopWebCall = async () => {
    try {
      await retellWebClient.stopCall();
      setIsCallActive(false);
      console.log("Call stopped");
    } catch (error) {
      console.error("Error stopping web call:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={toggleChat}
        className={`relative z-10 p-3 text-white transition-all duration-300 ${isOpen ? "rounded-full bg-[#609641]" : "rounded-sm bg-[#609641]"}`}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComment className="text-xl" />}
      </button>
      {isOpen && (
        <div className="absolute bottom-0 right-0 mb-12 w-80 rounded-lg bg-white shadow-md">
          <div className="relative h-72 overflow-y-auto p-4">
            {activeButton === "mic" ? (
              <div className="flex h-full items-center justify-center">
                <div className="absolute right-4 top-4 text-xs">
                  Powered by <span className="font-semibold text-[#609641]">Ecofash</span>
                </div>
                <div className="flex flex-col items-center mt-10">
                  <FaMicrophone className="text-4xl text-[#609641]" />
                  <button onClick={startWebCall} className="mt-10 bg-green-500 text-white rounded px-2 py-1">Start Call</button>
                  {isCallActive && (
                    <button onClick={stopWebCall} className="mt-2 bg-red-500 text-white rounded px-2 py-1">Stop Call</button>
                  )}
                </div>
              </div>
            ) : activeButton === "comment" && messages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/images/chatwidget/chat.png"
                  alt="Chat"
                  width={250}
                  height={250}
                />
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-2 flex ${msg.role == "user" ? "justify-end " : "justify-start"}`}>
                  <span className={`rounded px-2 py-1 ${msg.role == "user" ? "bg-[#609641] text-white" : "bg-gray-200"}`}>
                    {msg.content}
                  </span>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            {activeButton === "comment" ? (
              <div className="flex h-8 w-full flex-col">
                <div className="-mt-2 mb-2 flex w-full items-center text-sm text-gray-500">
                  <input
                    name="msg"
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message here..."
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                  <button onClick={handleSendMessage} className="ml-2">
                    <PaperAirplaneIcon className="h-6 w-6 text-[#609641]" />
                  </button>
                </div>
                <div className="mt-2 text-right text-xs">
                  Powered by <span className="font-semibold text-[#609641]">Ecofash</span>
                </div>
              </div>
            ) : (
              <div className="flex h-8 items-center justify-between">
                <div className="-mt-2 mb-2 text-sm text-gray-500">
                  I'm listening....
                </div>
              </div>
            )}
          </div>
          <div className="relative flex h-16 items-center justify-between rounded-b-lg border-t bg-[#609641] p-2">
            <div className="flex flex-col items-center">
              <div className={`absolute -top-7 left-4 ${activeButton === "mic" ? "hidden" : ""}`}>
                <div className="rounded-full bg-white p-2">
                  <button className="rounded-full bg-[#609641] p-3 text-white">
                    <FaComment className="text-xl" />
                  </button>
                </div>
              </div>
              <button
                onClick={toggleActiveButton}
                className={`mt-2 rounded-full p-6 text-white ${activeButton === "mic" ? "" : "hidden"}`}
              >
                <FaComment className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className={`absolute -top-7 right-4 ${activeButton === "comment" ? "hidden" : ""}`}>
                <div className="rounded-full bg-white p-2">
                  <button className="rounded-full bg-[#609641] p-3 text-white">
                    <FaMicrophone className="text-xl" />
                  </button>
                </div>
              </div>
              <button
                onClick={toggleActiveButton}
                className={`mt-2 rounded-full p-6 text-white ${activeButton === "comment" ? "" : "hidden"}`}
              >
                <FaMicrophone className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
