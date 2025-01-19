import { Search } from "lucide-react";
import { useState } from "react";

interface TrendingSearch {
  id: string;
  name: string;
}

const TRENDING_SEARCHES: TrendingSearch[] = [
  { id: "1", name: "AI Chatbots" },
  { id: "2", name: "Machine Learning" },
  { id: "3", name: "Robotic Process Automation" },
  { id: "4", name: "Deep Learning" },
  { id: "5", name: "Computer Vision" },
  { id: "6", name: "Natural Language Processing" },
  { id: "7", name: "Autonomous Vehicles" },
  { id: "8", name: "AI in Healthcare" },
];

export function SearchBar() {
  const [showTrending, setShowTrending] = useState(false);

  return (
    <div className="relative flex-1 max-w-2xl">
      <div className="flex">
        <input
          type="text"
          placeholder="Search products & brands"
          className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
          onFocus={() => setShowTrending(true)}
          onBlur={() => setTimeout(() => setShowTrending(false), 200)}
        />
        <button className="px-6 py-2 bg-gray-400 text-white rounded-r hover:bg-gray-500 flex items-center gap-2">
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>

      {showTrending && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b border mt-1 z-50">
          <div className="p-4">
            <div className="text-sm text-gray-500 flex items-center gap-2 mb-3">
              TRENDING SEARCHES
            </div>
            <div className="space-y-2">
              {TRENDING_SEARCHES.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block text-gray-700 hover:text-[#e40046] hover:bg-gray-50 px-2 py-1 rounded"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
