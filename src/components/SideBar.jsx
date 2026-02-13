import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div>
      <div className="font-semibold pl-2 text-center">
        <button className="cursor-pointer border border-black mb-5 rounded-lg pr-15 flex">
          <img
            className="h-8 mx-3"
            src="https://img.icons8.com/ios7/512/FFFFFF/home--v3.png"
            alt="home"
          />
          <Link to="/">
            <span className="pt-1 pb-2 mx-3">Home</span>
          </Link>
        </button>
        <button className="cursor-pointer border border-black rounded-lg pr-14 flex">
          <img
            className="h-8 mx-3"
            src="https://freepngimg.com/download/icon/search/10417-youtube-shorts-white.png"
            alt="shorts"
          />
          <Link to="/">
            <span className="pt-1 pb-2 mx-3">Shorts</span>
          </Link>
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
              <button className="w-full flex items-center px-3 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 1</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 2</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 3</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 4"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 4</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer ">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 5"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 5</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 6"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 6</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 7"
                  src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
                />
                <span className="ml-3 text-left font-normal">Channel 7</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <span className="ml-3 text-left text-l font-normal">⌵</span>
                <span className="ml-6 text-left font-normal pt-1">
                  Show more
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="font-bold pl-2">
        <div className="">
          <div className="pt-3 pb-2 px-3">
            <span className="font-semibold">You {">"} </span>
          </div>
          <ul className="py-2 list-none">
            <li>
              <button className="w-full flex items-center px-3 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDk4YkDE4f90PcfSzAjJ4_fvDMRJzYJ3oBEw&s"
                />
                <span className="ml-3 text-left font-normal">History</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://static.vecteezy.com/system/resources/thumbnails/049/624/353/small/party-playlist-icon-design-vector.jpg"
                />
                <span className="ml-3 text-left font-normal">Playlists</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://i.pinimg.com/736x/dc/dd/bd/dcddbdbf83b3846787a9b5c2e2cd2ba5.jpg"
                />
                <span className="ml-3 text-left font-normal">Watch later</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 4"
                  src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-like-icon-png-image_889403.jpg"
                />
                <span className="ml-3 text-left font-normal">Liked videos</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 4"
                  src="https://static.vecteezy.com/system/resources/previews/014/720/450/non_2x/video-start-button-icon-with-circle-on-black-background-illustration-free-vector.jpg"
                />
                <span className="ml-3 text-left font-normal">Your videos</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <span className="ml-3 text-left text-l font-normal">⌵</span>
                <span className="ml-6 text-left font-normal pt-1">
                  Show more
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="font-bold pl-2">
        <div className="">
          <div className="pt-3 pb-2 px-3">
            <span className="font-semibold">Explore</span>
          </div>
          <ul className="py-2 list-none">
            <li>
              <button className="w-full flex items-center px-3 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://i.pinimg.com/474x/71/76/8d/71768de07d01758268930d8247e9c366.jpg"
                />
                <span className="ml-3 text-left font-normal">Shopping</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://i.pinimg.com/474x/1e/9d/c2/1e9dc24db36c9226da76585bd0314b19.jpg"
                />
                <span className="ml-3 text-left font-normal">Music</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://i.pinimg.com/736x/da/2c/d3/da2cd3ad3c311d1db8d42819c9f49b04.jpg"
                />
                <span className="ml-3 text-left font-normal">Movies</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <span className="ml-3 text-left text-l font-normal">⌵</span>
                <span className="ml-6 text-left font-normal pt-1">
                  Show more
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="font-bold pl-2">
        <div className="">
          <div className="pt-3 pb-2 px-3">
            <span className="font-semibold">More from YouTube</span>
          </div>
          <ul className="py-2 list-none">
            <li>
              <button className="w-full flex items-center px-3 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://i.pinimg.com/736x/50/66/1d/50661d782c12872a1a20de032267147c.jpg"
                />
                <span className="ml-3 text-left font-normal">
                  YouTube Premium
                </span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://i.pinimg.com/736x/08/c6/cf/08c6cfbf8bc064ea723c6b076a8d8732.jpg"
                />
                <span className="ml-3 text-left font-normal">
                  YouTube Studio
                </span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://i.pinimg.com/736x/b2/1b/09/b21b095b4cec3e29df22f98b7f6dbc52.jpg"
                />
                <span className="ml-3 text-left font-normal">
                  YouTube Music
                </span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://i.pinimg.com/280x280_RS/fb/41/d0/fb41d0fd06e2fe35b8fb105b50f33e3f.jpg"
                />
                <span className="ml-3 text-left font-normal">YouTube Kids</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <span className="ml-3 text-left text-l font-normal">⌵</span>
                <span className="ml-6 text-left font-normal pt-1">
                  Show more
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="font-bold pl-2">
        <div className="">
          <div className="pt-3 pb-2 px-3">
            <span className="font-semibold">More from YouTube</span>
          </div>
          <ul className="py-2 list-none">
            <li>
              <button className="w-full flex items-center px-3 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 1"
                  src="https://i.pinimg.com/1200x/7c/51/da/7c51daa2cfcc85dd46184ed86ec221b9.jpg"
                />
                <span className="ml-3 text-left font-normal">Settings</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 2"
                  src="https://i.pinimg.com/236x/d3/76/ac/d376ac534279483b67406042df279cf8.jpg"
                />
                <span className="ml-3 text-left font-normal">
                  Report history
                </span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://static.vecteezy.com/system/resources/thumbnails/043/914/051/small/ask-for-help-line-inverted-icon-design-vector.jpg"
                />
                <span className="ml-3 text-left font-normal">Help</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-1 transition-colors cursor-pointer">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="channel 3"
                  src="https://thumbs.dreamstime.com/b/feedback-icon-trendy-design-style-feedback-icon-isolated-black-background-feedback-icon-trendy-design-style-feedback-icon-156691267.jpg"
                />
                <span className="ml-3 text-left font-normal">
                  Send feedback
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 opacity-25"></hr>
      <div className="pl-2 text-gray-700">
        <div>
          <div className="pt-2 pb-2 px-2 text-gray-500">
            <span className="font-semibold">© 2026 Google LLC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
