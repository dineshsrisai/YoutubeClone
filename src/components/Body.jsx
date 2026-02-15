import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex bg-black text-white min-h-screen">
      <div
        className={`${
          isMenuOpen ? "w-64" : "w-0"
        } transition-all duration-300 shrink-0 overflow-hidden`}
      >
        <SideBar />
      </div>
      <div className="flex-1 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
