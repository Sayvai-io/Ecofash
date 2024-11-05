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

const ChatWidget = () => {
  const [customPrompt, setPrompt] = useState("");
  const [openAIKey, setOpenAIkey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Scroll to the bottom whenever messages change

  const toggleChat = () => {
    if (isOpen) {
      setMessages([]); // Reset messages when closing the chat
    }
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const model = new ChatOpenAI({
      openAIApiKey: openAIKey,
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });
    const memory = new BufferMemory();
    const chain = new ConversationChain({ llm: model, memory: memory });
    setLoading(true);
    if (inputMessage.trim()) {
      setMessages([...messages, { role: "user", content: inputMessage }]);
      const currMessage = inputMessage;
      setInputMessage("");

      const systemMessage = new SystemMessage(customPrompt);

      try {
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
    <div className="fixed bottom-4 right-6">
      {!isOpen && ( // Show the comment button only when the chat is closed
        <button
          onClick={toggleChat}
          className={`relative z-10 p-3 text-white transition-all duration-300 rounded-sm bg-[#609641]`}
        >
          <FaComment className="text-xl" />
        </button>
      )}
      {isOpen && ( // Chat widget
        <div className="bg-white shadow-lg rounded-lg p-4 w-90">
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <h2 className="text-lg font-bold text-[#609641] ml-2">Ecofash Chatbot</h2>
            <button onClick={toggleChat} className="text-gray-500">
              <FaTimes className="text-xl hover:text-[#609641]" />
            </button>
          </div>
          <div className={`overflow-y-scroll h-80 hide-scrollbar custom-scrollbar`}>
            {/* Render messages or image here */}
            {messages.length === 0 ? ( // Check if there are no messages
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/images/chatwidget/chatbot1.png" // Update with your image path
                  alt="Chat"
                  width={150}
                  height={150}
                />
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-2`}>
                  {msg.role === "assistant" && ( // Render the profile image for assistant messages
                    <div className="mr-2"> {/* Margin to the right of the image */}
                      <Image
                        src="/images/chatwidget/chatbot.png" // Update with your profile image path
                        alt="Chatbot"
                        width={25} // Set the width of the image
                        height={25} // Set the height of the image
                        className="rounded-full" // Make the image rounded
                      />
                    </div>
                  )}
                  <div
                    className={`p-2 mb-2 max-w-[80%] break-words ${
                      msg.role === "user" 
                        ? "bg-[#609641] text-white rounded-3xl rounded-br-sm mr-2" // Three sides rounded large, one side small
                        : "bg-gray-200 text-black rounded-3xl rounded-tl-sm" // Adjust for assistant messages
                    }`}
                  >
                    <span>{msg.content}</span>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex mt-4 items-center">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="border rounded ml-2 p-1 w-full focus:outline-none focus:ring-1 focus:ring-[#609641]"
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage} className="absolute right-0 top-0 h-full flex items-center justify-center p-2">
                <PaperAirplaneIcon className="h-6 w-6 text-[#609641]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
