import ytlogo from "../assets/ytlogo.jpg";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 shadow-lg">
      <div className="flex items-center gap-4">
        <button className="text-2xl p-2 bg-black hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
          ☰
        </button>
        <img className="h-7 cursor-pointer" alt="youtube-logo" src={ytlogo} />
      </div>

      <div className="flex items-center flex-1 justify-center max-w-2xl mx-8">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <button className="border border-gray-300 border-l-0 rounded-r-full px-6 py-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
          <span className="inline-block scale-x-[-1] text-xl">⌕</span>
        </button>
      </div>

      <div className="flex items-center">
        <img
          className="h-15 w-15 rounded-full object-cover cursor-pointer"
          alt="user-logo"
          src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
