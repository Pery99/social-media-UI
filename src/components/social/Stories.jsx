import { useState } from "react";
import StoryViewer from "./StoryViewer";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);
  const stories = [
    {
      id: 1,
      user: "Your Story",
      avatar: "https://i.pravatar.cc/150?img=3",
      isAdd: true,
    },
    {
      id: 2,
      user: "Tunde Bakare",
      avatar:
        "https://i.pinimg.com/736x/2b/c5/fe/2bc5fe1af65bb19bda5bee425ad8d4bf.jpg",
      stories: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1580922110301-a666f6745565",
          duration: 5000,
          caption: "Epic show at Eko Hotel! 🎵",
        },
      ],
    },
    {
      id: 3,
      user: "Ngozi Okafor",
      avatar:
        "https://i.pinimg.com/736x/06/d5/ff/06d5ffc12cdafc2908362763cf11e47a.jpg",
      stories: [
        {
          type: "image",
          url: "https://i.pinimg.com/736x/71/d0/af/71d0afcd24acab1c003cee88820e4496.jpg",
          duration: 5000,
          caption: "I don do wedding o! 💍",
        },
      ],
    },
    {
      id: 4,
      user: "Folake Adeleke",
      avatar: "https://i.pravatar.cc/150?img=16",
      stories: [
        {
          type: "image",
          url: "https://i.pinimg.com/736x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg",
          duration: 5000,
          caption: "see good food! 🍜",
        },
        {
          type: "image",
          url: "https://i.pinimg.com/736x/26/78/72/2678722fd747fca84dd5d76bb604e099.jpg",
          duration: 5000,
          caption: "see good food!, chai!! 🍜",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-white border-b sm:border sm:rounded-xl">
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar py-4 px-4">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-[85px] sm:w-[100px]"
              >
                <button
                  onClick={() => !story.isAdd && setActiveStory(story)}
                  className="w-full focus:outline-none"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    {story.isAdd ? (
                      <>
                        <img
                          src={story.avatar}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                          <i className="ph-plus-bold"></i>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                        <img
                          src={story.stories?.[0]?.url || story.avatar}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 ring-2 ring-primary-500 rounded-full p-0.5">
                          <img
                            src={story.avatar}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <span className="text-xs mt-1 block text-center truncate">
                    {story.user}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeStory && (
        <StoryViewer
          story={activeStory}
          onClose={() => setActiveStory(null)}
          stories={stories}
          setActiveStory={setActiveStory}
        />
      )}
    </>
  );
};

export default Stories;
