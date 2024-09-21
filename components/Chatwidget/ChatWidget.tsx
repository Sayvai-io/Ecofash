import { useState, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaComment, FaTimes, FaMicrophone } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeButton, setActiveButton] = useState<'comment' | 'mic'>('comment');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
      setTimeout(() => {
        setMessages(prev => [...prev, "Thanks for your message!"]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleActiveButton = () => {
    setActiveButton(prev => prev === 'comment' ? 'mic' : 'comment');
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button 
        onClick={toggleChat} 
        className={`
          text-white p-3 z-10 relative transition-all duration-300
          ${isOpen 
            ? 'bg-[#609641] rounded-full' 
            : 'bg-[#609641] rounded-sm'
          }
        `}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComment className="text-xl" />}
      </button>
      {isOpen && (
        <div className="bg-white shadow-md rounded-lg w-80 absolute bottom-0 right-0 mb-12">
          <div className="h-72 overflow-y-auto p-4 relative">
            {activeButton === 'mic' ? (
              <div className="flex justify-center items-center h-full">
                <div className="absolute top-4 right-4 text-xs">
                  Powered by <span className="text-[#609641] font-semibold">Ecofash</span>
                </div>
                <Image 
                  src="/images/chatwidget/sound.png" 
                  alt="Microphone" 
                  width={200} 
                  height={200}
                />
              </div>
            ) : activeButton === 'comment' && messages.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <Image 
                  src="/images/chatwidget/chat.png" 
                  alt="Chat" 
                  width={250} 
                  height={250}
                />
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="bg-gray-200 rounded px-2 py-1">{msg}</span>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            {activeButton === 'comment' ? (
              <div className="flex flex-col h-8">
                <div className="text-gray-500 text-sm mb-2 -mt-2">
                  Type what you are looking for...
                </div>
                
                <div className="text-right text-xs mt-2">
                  Powered by <span className="text-[#609641] font-semibold">Ecofash</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between h-8">
                <div className="text-gray-500 text-sm mb-2 -mt-2">
                  I'm listening....
                </div>
                {/* You can add a mic animation or icon here if needed */}
              </div>
            )}
          </div>
          <div className="border-t p-2 flex justify-between rounded-b-lg items-center bg-[#609641] relative h-16">
            <div className="flex flex-col items-center">
              <div className={`absolute -top-7 left-4 ${activeButton === 'mic' ? 'hidden' : ''}`}>
                <div className="bg-white rounded-full p-2">
                  <button className="bg-[#609641] text-white p-3 rounded-full">
                    <FaComment className="text-xl" />
                  </button>
                </div>
              </div>
              <button 
                onClick={toggleActiveButton} 
                className={` text-white p-6 rounded-full mt-2 ${activeButton === 'mic' ? '' : 'hidden'}`}
              >
                <FaComment className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className={`absolute -top-7 right-4 ${activeButton === 'comment' ? 'hidden' : ''}`}>
                <div className="bg-white rounded-full p-2">
                  <button className="bg-[#609641] text-white p-3 rounded-full">
                    <FaMicrophone className="text-xl" />
                  </button>
                </div>
              </div>
              <button 
                onClick={toggleActiveButton} 
                className={` text-white p-6 rounded-full mt-2 ${activeButton === 'comment' ? '' : 'hidden'}`}
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
