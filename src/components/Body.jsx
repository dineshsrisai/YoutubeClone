import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex bg-black text-white -mb-10">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
