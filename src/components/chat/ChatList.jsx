import { useState } from "react";
import MobileChat from './MobileChat';  // Add this import

const ChatList = ({ onChatSelect }) => {
  const [chats] = useState([
    {
      id: 1,
      name: "Sarah Justine",
      lastMessage: "Hey, how are you?",
      time: "2m ago",
      unread: 2,
      avatar:
        "https://i.pinimg.com/736x/c9/81/37/c98137238a95638ec71cb73020b4e483.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Mike Johnson",
      lastMessage: "The meeting is at 3 PM",
      time: "1h ago",
      unread: 0,
      avatar:
        "https://i.pinimg.com/736x/72/bc/d2/72bcd2e8f7232b7b263866f510cb7747.jpg",
      online: false,
    },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMobileChat, setShowMobileChat] = useState(false);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    if (window.innerWidth < 1024) {
      setShowMobileChat(true);
    } else {
      onChatSelect?.();
    }
  };

  return (
    <>
      <div className="h-full flex flex-col bg-white">
        {/* Chat Header with Status */}
        <div className="p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-xl">Messages</h2>
              <p className="text-sm text-gray-500">3 unread messages</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <i className="ph-gear-six text-xl text-gray-600"></i>
              </button>
              <button className="w-9 h-9 flex items-center justify-center bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors">
                <i className="ph-plus-bold text-xl"></i>
              </button>
            </div>
          </div>

          {/* Enhanced Search */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all duration-200"
            />
            <i className="ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500"></i>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="px-4 py-3 border-b bg-white/80 backdrop-blur-sm sticky top-[130px] z-10">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            <button className="px-4 py-2 bg-primary-50 text-primary-600 rounded-xl text-sm font-medium whitespace-nowrap flex items-center gap-2">
              <i className="ph-chats-circle"></i>
              All Messages
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-xl text-sm font-medium whitespace-nowrap flex items-center gap-2 text-gray-600">
              <i className="ph-envelope"></i>
              Unread
              <span className="bg-primary-500 text-white text-xs rounded-full px-2">3</span>
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-xl text-sm font-medium whitespace-nowrap flex items-center gap-2 text-gray-600">
              <i className="ph-users"></i>
              Groups
            </button>
          </div>
        </div>

        {/* Enhanced Chat List */}
        <div className="flex-1 overflow-y-auto px-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                ${selectedChat?.id === chat.id 
                  ? 'bg-primary-50 border-primary-100' 
                  : 'hover:bg-gray-50 border-transparent'
                } my-1 border`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={chat.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold truncate text-gray-900">{chat.name}</h3>
                  <span className="text-xs text-gray-500 ml-2 flex items-center gap-1">
                    <i className="ph-clock text-base"></i>
                    {chat.time}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate flex items-center gap-1">
                  {chat.lastMessage}
                  {chat.unread > 0 && (
                    <span className="inline-flex items-center justify-center bg-primary-500 text-white text-xs rounded-full h-5 min-w-[20px] ml-2">
                      {chat.unread}
                    </span>
                  )}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="p-4 border-t bg-white/80 backdrop-blur-sm sticky bottom-0 z-10">
          <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-colors">
            <i className="ph-plus-circle text-lg"></i>
            Start New Chat
          </button>
        </div>
      </div>

      {/* Mobile Chat View - Now properly rendered */}
      {showMobileChat && selectedChat && (
        <div className="fixed inset-0 z-[60] bg-white">
          <MobileChat 
            chat={selectedChat} 
            onClose={() => setShowMobileChat(false)}
          />
        </div>
      )}
    </>
  );
};

export default ChatList;
