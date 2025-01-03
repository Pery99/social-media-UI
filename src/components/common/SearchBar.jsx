const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search users or locations..."
        className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl 
                 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                 transition-all duration-200"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default SearchBar
