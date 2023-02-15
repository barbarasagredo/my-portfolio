import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: " #C55BBA", fontWeight: 600 };
  return (
    <nav className="grid grid-cols-3 items-center fixed w-full text-gray-700 bg-white border-b h-12">
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
      <div className="flex justify-between">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/aboutMe"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About me
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
