const UsersList = ({ isCompact }) => {
  // Example users data - in real app this would come from an API
  const users = [
    {
      id: 1,
      name: "Sarah Wilson",
      status: "online",
      avatar:
        "https://i.pinimg.com/736x/e5/2b/24/e52b24c7ea6bbade2fc53dfe5d22c0ff.jpg",
      location: "New York",
    },
    {
      id: 2,
      name: "Mike Johnson",
      status: "offline",
      avatar:
        "https://i.pinimg.com/736x/35/52/30/3552301f635f16aa66d249b5f5e0b569.jpg",
      location: "London",
    },
    {
      id: 3,
      name: "Emily Davis",
      status: "online",
      avatar:
        "https://i.pinimg.com/736x/5a/2e/e7/5a2ee7e4652f589354a26d1d9533fe71.jpg",
      location: "Tokyo",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Nearby People</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800">
          See all
        </button>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition"
          >
            <div className="relative flex-shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                  ${user.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">{user.location}</p>
            </div>

            <button className="text-blue-600 hover:text-blue-800 text-sm">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
