const SideBar = () => {
  return (
    <div>
      <div className=" pl-2 text-center">
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
    </div>
  );
};

export default SideBar;
