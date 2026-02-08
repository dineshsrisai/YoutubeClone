const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <img
          className="h-8"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/960px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img
          className="h-8"
          alt="user-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
