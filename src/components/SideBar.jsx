const SideBar = () => {
  return (
    <div>
      <div className="font-semibold pl-2 text-center">
        <button className="cursor-pointer border border-black focus:outline-none focus:border-gray-50 mb-5 rounded-lg pr-15 flex">
          <img
            className="h-8 mx-3"
            src="https://img.icons8.com/ios7/512/FFFFFF/home--v3.png"
            alt="home"
          />
          <span className="pt-1 pb-2 mx-3">Home</span>
        </button>
        <button className="cursor-pointer border border-black focus:outline-none focus:border-gray-50 rounded-lg pr-14 flex">
          <img
            className="h-8 mx-3"
            src="https://freepngimg.com/download/icon/search/10417-youtube-shorts-white.png"
            alt="shorts"
          />
          <span className="pt-1 pb-2 mx-3">Shorts</span>
        </button>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="font-bold pl-2">
        <div className="">
          <div className="pt-3 pb-2 px-3">
            <span className="font-semibold">Subscriptions</span>
          </div>
          <ul className="py-2 list-none">
            <li>
              <button className="w-full flex items-center px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 1</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 2</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 3</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 4"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 4</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 5"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 5</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 6"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 6</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 7"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 7</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors">
                <span className="ml-3 text-left text-l font-normal">⌵</span>
                <span className="ml-6 text-left font-normal pt-1">
                  Show more
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
