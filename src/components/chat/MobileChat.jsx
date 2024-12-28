import { useState } from 'react';

const MobileChat = ({ chat, onClose }) => {
  const [message, setMessage] = useState('');
  
  const messages = [
    {
      id: 1,
      sender: 'them',
      content: 'Hey! How are you?',
      time: '2:30 PM',
      status: 'read'
    },
    {
      id: 2,
      sender: 'me',
      content: "I'm good! Just finished my meeting. How about you?",
      time: '2:31 PM',
      status: 'read'
    },
    {
      id: 3,
      sender: 'them',
      content: "Great! I'm at that new café in Lekki. The one I told you about.",
      time: '2:32 PM',
      status: 'read'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Chat Header */}
      <div className="safe-top bg-white border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={onClose}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
          >
            <i className="ph-arrow-left text-xl"></i>
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <img 
                src={chat.avatar} 
                alt="" 
                className="w-10 h-10 rounded-full"
              />
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900">{chat.name}</h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="ph-phone text-xl text-gray-600"></i>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="ph-dots-three-vertical text-xl text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
        {messages.map(msg => (
          <div 
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[85%] rounded-2xl p-3 
              ${msg.sender === 'me' 
                ? 'bg-primary-500 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
              }
            `}>
              <p className="text-[15px]">{msg.content}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className={`text-xs ${msg.sender === 'me' ? 'text-primary-100' : 'text-gray-400'}`}>
                  {msg.time}
                </span>
                {msg.sender === 'me' && (
                  <i className="ph-checks-bold text-xs text-primary-100"></i>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="safe-bottom bg-white border-t p-2">
        <div className="flex items-center gap-2">
          <button className="p-3 hover:bg-gray-100 rounded-full">
            <i className="ph-plus text-xl text-gray-600"></i>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full bg-gray-100 rounded-full py-2.5 px-4 pr-10 focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary-500 text-white rounded-full">
              <i className="ph-paper-plane-right-fill text-sm"></i>
            </button>
          </div>
          <button className="p-3 hover:bg-gray-100 rounded-full">
            <i className="ph-camera text-xl text-gray-600"></i>
          </button>
          <button className="p-3 hover:bg-gray-100 rounded-full">
            <i className="ph-microphone text-xl text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileChat;
