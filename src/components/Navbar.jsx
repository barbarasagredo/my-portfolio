import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: " #C55BBA", fontWeight: 600 };

  const openMenu = () => {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  return (
    <nav className="flex justify-between items-center fixed w-full text-gray-700 bg-white border-b h-12 px-4">
      <div className="flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C55BBA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="col-span-1 m-4"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div
        id="menu"
        className="md:flex hidden flex-grow justify-start absolute md:relative md:top-0 top-12 md:border-none border-solid md:border-0 border-2 bg-white w-full md:w-fit"
      >
        <div className="flex flex-col md:flex-row space-x-4 items-center md:py-0 py-8">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="pl-4 pb-2 md:pb-0"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="pb-4 md:pb-0"
          >
            Projects
          </NavLink>
          <NavLink
            to="/aboutMe"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="pb-4 md:pb-0"
          >
            About me
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="pb-4 md:pb-0"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex md:hidden justify-end" onClick={openMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#626c7f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
