const ChatWindow = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="h-full flex flex-col bg-white lg:rounded-xl lg:border">
        {/* Enhanced Chat Header */}
        <div className="p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={onClose} className="lg:hidden w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full">
                <i className="ph-arrow-left text-xl"></i>
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?img=44" alt="" className="w-10 h-10 rounded-full ring-2 ring-gray-100" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Sarah Wilson</h3>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Online
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-600">
                <i className="ph-phone text-xl"></i>
              </button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-600">
                <i className="ph-video-camera text-xl"></i>
              </button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-600">
                <i className="ph-dots-three-vertical-bold text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-sm">
              <p className="text-gray-800">Hey! How are you?</p>
              <span className="text-xs text-gray-400 mt-1 block">2:30 PM</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary-500 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-sm">
              <p>I'm good! How about you?</p>
              <span className="text-xs text-primary-100 mt-1 block">2:31 PM</span>
            </div>
          </div>
        </div>

        {/* Enhanced Chat Input */}
        <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-500">
              <i className="ph-smiley text-xl"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-500">
              <i className="ph-image text-xl"></i>
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-gray-100 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors">
                <i className="ph-paper-plane-right-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
