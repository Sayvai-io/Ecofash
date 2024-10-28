import { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FaComment, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: String; content: String }[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
          <div className="relative h-80 overflow-y-auto p-4">
            {messages.length === 0 ? (
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
                <div key={index} className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <span className={`rounded px-2 py-1 ${msg.role === "user" ? "bg-[#609641] text-white" : "bg-gray-200"}`}>
                    {msg.content}
                  </span>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <div className="flex h-8 w-full flex-col">
              <div className="-mt-2 mb-2 flex w-full items-center text-sm text-gray-500">
                <input
                  name="msg"
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message here..."
                  className="w-full border rounded-lg border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-[#609641] focus:border-transparent"
                />
                <button onClick={handleSendMessage} className="ml-2">
                  <PaperAirplaneIcon className="h-6 w-6 text-[#609641]" />
                </button>
              </div>
              <div className="mt-2 text-right text-xs">
                Powered by <span className="font-semibold text-[#609641]">Ecofash</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
