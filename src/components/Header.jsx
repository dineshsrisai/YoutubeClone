import { useDispatch } from "react-redux";
import ytlogo from "../assets/ytlogo.jpg";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import js from "@eslint/js";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-black text-white flex items-center justify-between px-2 md:px-4 py-3 shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className="text-xl md:text-2xl p-2 bg-black hover:bg-gray-900 rounded-full transition-colors cursor-pointer"
          onClick={toggleMenuHandler}
        >
          ☰
        </button>
        <img
          className="h-5 md:h-7 cursor-pointer"
          alt="youtube-logo"
          src={ytlogo}
        />
      </div>
      <div className="flex items-center flex-1 justify-center max-w-xl md:max-w-2xl mx-2 md:mx-8">
        <div className="relative flex w-full">
          <input
            type="text"
            className="flex-1 border border-gray-600 bg-black text-white rounded-l-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base focus:outline-none focus:border-blue-500"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-600 bg-black hover:bg-gray-900 border-l-0 rounded-r-full px-4 md:px-6 py-1.5 md:py-2 transition-colors cursor-pointer">
            <span className="inline-block scale-x-[-1] text-lg md:text-xl">
              ⌕
            </span>
          </button>
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-[38rem] bg-gray-950 border border-gray-900 rounded-xl mt-2 shadow-2xl z-50">
              <ul className="text-sm md:text-base">
                {suggestions.map((s) => (
                  <li key={s} className="px-4 py-2 hover:bg-gray-800">
                    ⌕ {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition-all"
          alt="user-logo"
          src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
