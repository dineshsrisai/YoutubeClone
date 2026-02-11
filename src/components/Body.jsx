import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex bg-black text-white -mb-10">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
