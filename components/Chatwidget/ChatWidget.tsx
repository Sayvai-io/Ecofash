import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { FaComment, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { SystemMessage } from "@langchain/core/messages";
import { supabase } from "@/supabase_config/supabaseClient";

// // Add memory for conversation history
// const memory = new MemorySaver();
// const app = workflow.compile({ checkpointer: memory });

const ChatWidget = () => {
  const [customPrompt, setPrompt] = useState("");
  const [openAIKey, setOpenAIkey] = useState("");
  const [model, setModel] = useState<ChatOpenAI | null>(null);
  const [chain, setChain] = useState<ConversationChain | null>(null);
  // let model = new ChatOpenAI({
  //   openAIApiKey: openAIKey,
  //   model: "gpt-3.5-turbo",
  //   temperature: 0.7,
  // });
  const memory = new BufferMemory();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState<"comment" | "mic">(
    "comment",
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchChatBotDetails = async () => {
    const { data, error } = await supabase.from("aichatbot").select("*");
    if (error) {
      console.error("Error fetching about details:", error);
    } else {
      const chatBotData = data[0];
      setOpenAIkey(chatBotData.apikey);
      setPrompt(chatBotData.custom_prompt);
    }
  };

  useEffect(() => {
    fetchChatBotDetails();
  }, []);

  useEffect(() => {
    if (openAIKey) {
      const newModel = new ChatOpenAI({
        openAIApiKey: openAIKey,
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      });
      const newChain = new ConversationChain({ llm: newModel, memory: memory });
      setModel(newModel);
      setChain(newChain);
    }
  }, [openAIKey]);
  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  // const handleSendMessage = async () => {
  //   setLoading(true);
  //   if (inputMessage.trim()) {
  //     setMessages([...messages, { role: "user", content: inputMessage }]);
  //     const currMessage = inputMessage;
  //     setInputMessage("");
  //     const systemMessage = {
  //       role: "system",
  //       content:
  //         "You are a helpful assistant representing the organization Ecofash. If someone asks about the organization name, always respond with 'Ecofash'.",
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://api.openai.com/v1/chat/completions",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  //           },
  //           body: JSON.stringify({
  //             model: "gpt-3.5-turbo",
  //             messages: [
  //               systemMessage,
  //               ...messages,
  //               { role: "user", content: currMessage },
  //             ],
  //             temperature: 0.7,
  //             max_tokens: 150,
  //           }),
  //         },
  //       );

  //       const data = await response.json();
  //       console.log(data);
  //       const aiMessage = data.choices[0].message.content.trim();
  //       console.log(aiMessage);
  //       // Add the assistant response to the chat
  //       setLoading(false);
  //       setMessages((prev) => [
  //         ...prev,
  //         { role: "assistant", content: aiMessage },
  //       ]);
  //     } catch (error) {
  //       console.error("Error fetching OpenAI API:", error);
  //       setLoading(false);
  //       setMessages((prev) => [
  //         ...prev,
  //         { role: "assistant", content: "Error in getting response" },
  //       ]);
  //     }

  //     // setTimeout(() => {
  //     //   setMessages((prev) => [...prev, "Thanks for your message!"]);
  //     // }, 1000);
  //   }
  // };

  const handleSendMessage = async () => {
    setLoading(true);
    if (inputMessage.trim()) {
      setMessages([...messages, { role: "user", content: inputMessage }]);
      const currMessage = inputMessage;
      setInputMessage("");

      const systemMessage = new SystemMessage(customPrompt);

      try {
        if (chain) {
          const response = await chain.call({
            input: [systemMessage, currMessage],
          });

          const aiMessage = response.response;

          // Add the assistant response to the chat
          setLoading(false);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: aiMessage },
          ]);
        }
      } catch (error) {
        console.error("Error fetching OpenAI API:", error);
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Error in getting response" },
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
        className={`relative z-10 p-3 text-white transition-all duration-300 ${
          isOpen ? "rounded-full bg-[#609641]" : "rounded-sm bg-[#609641]"
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaComment className="text-xl" />
        )}
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
              <div>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex ${
                      msg.role == "user" ? "justify-end " : "justify-start"
                    }`}
                  >
                    <span
                      className={` rounded  px-2 py-1 ${
                        msg.role == "user"
                          ? "bg-[#609641] text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="w-10 animate-pulse rounded bg-gray-300 text-center text-gray-400">
                    ...
                  </div>
                )}
              </div>
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
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#609641]"
                />
                <button onClick={handleSendMessage} className="ml-2">
                  <PaperAirplaneIcon className="h-6 w-6 text-[#609641]" />
                </button>
              </div>
              <div className="mt-2 text-right text-xs">
                Powered by{" "}
                <span className="font-semibold text-[#609641]">Ecofash</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
