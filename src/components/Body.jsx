import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex bg-black text-white">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
