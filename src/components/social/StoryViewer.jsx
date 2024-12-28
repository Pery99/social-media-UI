import { useState, useEffect, useCallback } from 'react';

const StoryViewer = ({ story, onClose, stories, setActiveStory }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentStory = story.stories[currentStoryIndex];

  const goToNextStory = useCallback(() => {
    if (currentStoryIndex < story.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      // Find next user's story
      const currentStoryIndex = stories.findIndex(s => s.id === story.id);
      if (currentStoryIndex < stories.length - 1) {
        const nextStory = stories[currentStoryIndex + 1];
        if (nextStory.stories) {
          setActiveStory(nextStory);
        }
      } else {
        onClose();
      }
    }
  }, [currentStoryIndex, story, stories]);

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    } else {
      // Find previous user's story
      const currentStoryIndex = stories.findIndex(s => s.id === story.id);
      if (currentStoryIndex > 0) {
        const prevStory = stories[currentStoryIndex - 1];
        if (prevStory.stories) {
          setActiveStory(prevStory);
        }
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goToNextStory();
          return 0;
        }
        return prev + 1;
      });
    }, currentStory.duration / 100);

    return () => clearInterval(timer);
  }, [currentStory, goToNextStory]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl">
      {/* Story Container */}
      <div className="h-full flex items-center justify-center">
        {/* Story Card */}
        <div className="relative w-full h-full md:w-[420px] md:h-[85vh] md:rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-20">
            {/* Progress Bar */}
            <div className="px-2 pt-2 pb-4 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex gap-1">
                {story.stories.map((_, index) => (
                  <div key={index} className="h-0.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-100 ease-linear"
                      style={{ 
                        width: `${index === currentStoryIndex ? progress : index < currentStoryIndex ? 100 : 0}%`
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center justify-between mt-3 px-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={story.avatar} 
                      alt=""
                      className="w-8 h-8 rounded-full ring-2 ring-white/50"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{story.user}</h4>
                    <p className="text-white/70 text-xs">Just now</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-white/70 hover:text-white transition-colors">
                    <i className="ph-dots-three-outline-vertical-fill text-xl"></i>
                  </button>
                  <button 
                    onClick={onClose}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <i className="ph-x-bold text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative h-full group">
            <img 
              src={currentStory.url} 
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Navigation Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={goToPrevStory}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition"
              >
                <i className="ph-caret-left-bold text-2xl"></i>
              </button>
              <button 
                onClick={goToNextStory}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition"
              >
                <i className="ph-caret-right-bold text-2xl"></i>
              </button>
            </div>

            {/* Caption */}
            {currentStory.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-white text-center">{currentStory.caption}</p>
              </div>
            )}

            {/* Quick Reactions */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {['❤️', '😂', '😮', '😢', '👏'].map((emoji) => (
                <button 
                  key={emoji}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/20 transform hover:scale-110 transition"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Story Reply */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Reply to story..."
                className="flex-1 bg-white/10 backdrop-blur-md text-white placeholder-white/50 px-4 py-2 rounded-full border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition">
                <i className="ph-paper-plane-right-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
