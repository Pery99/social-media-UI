import { useState } from "react";

const FilterPanel = ({ selected, onSelect }) => {
  const filters = [
    { id: "all", label: "All Users", count: 86, icon: "👥" },
    { id: "online", label: "Online", count: 24, icon: "🟢" },
    { id: "nearby", label: "Nearby", count: 12, icon: "📍" },
    { id: "new", label: "New Users", count: 8, icon: "✨" },
    { id: "friends", label: "Friends", count: 31, icon: "❤️" },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Filter By</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>

      <div
        className={`
        grid gap-2 transition-all duration-300 ease-in-out
        ${isExpanded ? "grid-cols-2" : "grid-cols-1"}
      `}
      >
        {filters.map((filter, index) => (
          <button
            key={filter.id}
            onClick={() => onSelect(filter.id)}
            className={`
              flex items-center justify-between p-3 rounded-lg
              transition-all duration-200 group
              ${
                selected === filter.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }
              ${!isExpanded && index > 2 ? "hidden" : "flex"}
            `}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{filter.icon}</span>
              <span className="font-medium">{filter.label}</span>
            </div>
            <span
              className={`
              text-xs px-2 py-1 rounded-full
              ${
                selected === filter.id
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-600 group-hover:bg-gray-200"
              }
            `}
            >
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Advanced Filters</span>
          <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
            <span>Customize</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
