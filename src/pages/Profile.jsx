const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-4">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-500">New York, USA</p>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Frontend Developer | Coffee enthusiast | Love connecting with new
              people
            </p>

            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">245</div>
                <div className="text-sm text-gray-500">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-500">Groups</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">89</div>
                <div className="text-sm text-gray-500">Events</div>
              </div>
            </div>
          </div>

          <div className="md:ml-auto">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="font-semibold text-gray-800 mb-3">About</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Frontend Developer at Tech Corp</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>Studies at University of Tech</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Lives in New York, USA</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="font-semibold text-gray-800 mb-3">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Photography",
                "Travel",
                "Music",
                "Coffee",
                "Technology",
                "Design",
              ].map((interest) => (
                <span
                  key={interest}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="font-semibold text-gray-800 mb-3">
              Recent Activity
            </h2>
            {/* Activity items would go here */}
            <div className="text-gray-500 text-center py-8">
              No recent activity to show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
