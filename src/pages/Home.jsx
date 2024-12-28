import { useState } from 'react'
import Stories from '../components/social/Stories'
import Feed from '../components/social/Feed'
import ChatList from '../components/chat/ChatList'
import ChatWindow from '../components/chat/ChatWindow'

const Home = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-0 sm:px-4 py-0 sm:py-4">
          <div className="flex gap-4 relative">
            {/* Left Sidebar - Navigation */}
            <div className="hidden lg:block w-64 sticky top-4 h-[calc(100vh-2rem)]">
              <div className="bg-white rounded-xl shadow-sm border p-4 h-full">
                <div className="space-y-1">
                  <button className="w-full text-left px-4 py-3 rounded-xl bg-primary-50 text-primary-600 font-medium">
                    <i className="ph-house-fill text-xl mr-4"></i>
                    Home
                  </button>
                  {/* ...other navigation buttons... */}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-primary-500 text-white rounded-xl py-3 font-medium hover:bg-primary-600">
                    Create Post
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content - Stories and Feed */}
            <main className="flex-1 max-w-[600px] mx-auto">
              <div className="space-y-4">
                <Stories />
                <Feed />
              </div>
            </main>

            {/* Right Sidebar - Chat */}
            <div className={`
              fixed inset-0 lg:relative lg:w-[380px] lg:inset-auto
              ${showChat ? 'block' : 'hidden lg:block'}
              bg-black/50 lg:bg-transparent z-50 lg:z-0
            `}>
              {/* Close button for mobile - Repositioned */}
              <button 
                onClick={() => setShowChat(false)}
                className="fixed top-4 left-4 p-3 bg-white/10 backdrop-blur rounded-full text-white lg:hidden z-[51]"
              >
                <i className="ph-x-bold text-2xl"></i>
              </button>

              <div className="w-full h-full sm:w-[380px] lg:w-auto ml-auto">
                <div className="bg-white h-[100vh] lg:h-[calc(100vh-2rem)] lg:rounded-xl lg:border lg:shadow-sm overflow-hidden lg:sticky lg:top-4">
                  <ChatList onChatSelect={() => setShowChat(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Chat Toggle Button */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed right-4 bottom-20 lg:hidden z-[100] w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-200 flex items-center justify-center floating-chat-btn"
        >
          <div className="relative">
            <i className="ph-chat-circle-dots-fill text-2xl"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default Home;
