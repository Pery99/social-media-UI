import { useState, useEffect } from 'react'

const Feed = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Tosin Adesanya',
      avatar: 'https://i.pravatar.cc/150?img=33',
      time: '10m ago',
      content: 'New amala joint for VI people! This place sweet die! 😋 The ewedu and gbegiri combo na die! Who wan follow me go there?',
      likes: 234,
      comments: 45,
      isLiked: false,
      tags: ['#LagosFood', '#Amala', '#WeekendVibes']
    },
    {
      id: 2,
      user: 'Dr. Funke Adeyemi',
      avatar: 'https://i.pravatar.cc/150?img=23',
      time: '1h ago',
      content: 'Just opened my new hospital in Lekki! 🏥 Bringing quality healthcare to our community. Special rates for first-time patients. Repost to support! 🙏',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      likes: 891,
      comments: 156,
      isLiked: false,
      tags: ['#HealthCare', '#LagosHospitals', '#Community']
    },
    {
      id: 3,
      user: 'Emmanuel "Tech Bro" Obi',
      avatar: 'https://i.pravatar.cc/150?img=42',
      time: '30m ago',
      content: 'Another day of NEPA taking light during important meetings 😤 Thank God for inverter!',
      likes: 567,
      comments: 89,
      isLiked: false,
      tags: ['#9to5Life', '#LagosTechBro']
    },
    {
      id: 4,
      user: 'Blessing Bakare',
      avatar: 'https://i.pravatar.cc/150?img=27',
      time: '2h ago',
      content: 'My small chops business don blow! 🎉 Now delivering to Ikeja, VI, and Lekki. Swipe to see menu! DM to order 📱',
      image: 'https://images.unsplash.com/photo-1624374545359-94a0bf6eed82',
      likes: 445,
      comments: 78,
      isLiked: false,
      gallery: true
    },
    {
      id: 5,
      user: 'Chidi Aneke',
      avatar: 'https://i.pravatar.cc/150?img=45',
      time: '45m ago',
      content: 'Third Mainland Bridge traffic no be here! 😩 2 hours for bridge, God abeg! Anyone know alternative route?',
      likes: 782,
      comments: 234,
      isLiked: false,
      tags: ['#LagosTraffic', '#GodAbeg']
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        }
      }
      return post
    }))
  }

  const handlePost = () => {
    if (!postContent.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      user: "You",
      avatar: "https://i.pravatar.cc/150?img=3",
      time: "Just now",
      content: postContent,
      likes: 0,
      comments: 0,
      isLiked: false,
    };
    
    setPosts([newPost, ...posts]);
    setPostContent('');
    setShowPostModal(false);
  };

  const PostModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-4 m-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Create Post</h3>
          <button onClick={() => setShowPostModal(false)} className="text-gray-500 hover:text-gray-700">
            <i className="ph-x text-2xl"></i>
          </button>
        </div>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full h-32 p-4 border rounded-xl resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="What's on your mind?"
        ></textarea>
        <div className="flex gap-2 mt-4">
          <button 
            onClick={handlePost}
            disabled={!postContent.trim()}
            className="flex-1 bg-primary-500 text-white py-2.5 rounded-xl hover:bg-primary-600 
              disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Post</span>
            <i className="ph-paper-plane-right"></i>
          </button>
        </div>
      </div>
    </div>
  );

  const ReactionTooltip = ({ postId, onReact }) => (
    <div className="absolute -top-12 left-0 bg-white rounded-full shadow-lg px-2 py-1 flex gap-1 animate-fadeIn z-50">
      {['❤️', '😂', '😮', '😢', '👏'].map(emoji => (
        <button 
          key={emoji}
          className="p-2 hover:scale-125 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            onReact(postId, emoji);
          }}
        >
          {emoji}
        </button>
      ))}
    </div>
  );

  // Enhanced UX features
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showReactionTooltip, setShowReactionTooltip] = useState(null);

  // Scroll to top button handler
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pull to refresh functionality
  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  return (
    <>
      {/* Refresh indicator */}
      {isRefreshing && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-primary-500">
          <div className="h-full w-1/3 bg-white animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>
      )}

      <div className="space-y-4">
        {/* Create Post Card */}
        <div className="bg-white border-b sm:border sm:rounded-xl">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <button
                onClick={() => setShowPostModal(true)}
                className="flex-1 text-left px-4 py-2 bg-gray-100 rounded-full text-sm sm:text-base text-gray-500"
              >
                What's on your mind?
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t">
            {/* Post Actions */}
            <button className="flex items-center justify-center gap-2 p-3 hover:bg-gray-50">
              <i className="ph-image text-xl text-green-500"></i>
              <span className="hidden sm:inline text-gray-600">Photo</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 hover:bg-gray-50">
              <i className="ph-map-pin text-xl text-blue-500"></i>
              <span className="hidden sm:inline text-gray-600">Location</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 hover:bg-gray-50">
              <i className="ph-smiley text-xl text-yellow-500"></i>
              <span className="hidden sm:inline text-gray-600">Feeling</span>
            </button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white border-b sm:border sm:rounded-xl overflow-hidden animate-fadeIn"
          >
            {/* Post Header */}
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src={post.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full ring-2 ring-gray-100 hover:ring-primary-100 transition-all"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        {post.user}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500">
                        · {post.time}
                      </span>
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-gray-900">
                      {post.content}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <i className="ph-dots-three-outline text-xl"></i>
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              {/* <p className="text-gray-900 whitespace-pre-line">
                {post.content}
              </p> */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-primary-500 text-sm hover:underline cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="relative group">
                <img
                  src={post.image}
                  alt=""
                  className="w-full object-cover cursor-pointer hover:brightness-95 transition-all"
                  loading="lazy"
                />
                {post.gallery && (
                  <button className="absolute right-4 top-4 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ph-images text-xl"></i>
                  </button>
                )}
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4 border-t">
              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <div className="relative">
                    <button
                      className="flex items-center gap-2 text-gray-500 hover:text-primary-500 transition-colors group"
                      onMouseEnter={() => setShowReactionTooltip(post.id)}
                      onMouseLeave={() => setShowReactionTooltip(null)}
                    >
                      <i
                        className={`${
                          post.isLiked
                            ? "ph-heart-fill text-red-500"
                            : "ph-heart"
                        } text-lg sm:text-xl`}
                      ></i>
                      <span>{post.likes}</span>

                      {showReactionTooltip === post.id && (
                        <ReactionTooltip
                          postId={post.id}
                          onReact={handleLike}
                        />
                      )}
                    </button>
                  </div>

                  <button className="flex items-center gap-2 text-gray-500 hover:text-primary-500 transition-colors">
                    <i className="ph-chat-circle text-lg sm:text-xl"></i>
                    <span>{post.comments}</span>
                  </button>
                </div>

                <button className="text-gray-500 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-50">
                  <i className="ph-share text-lg sm:text-xl"></i>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors animate-fadeIn"
        >
          <i className="ph-arrow-up text-xl"></i>
        </button>
      )}

      {showPostModal && <PostModal />}
    </>
  );
}

export default Feed
