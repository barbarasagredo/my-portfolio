import "../App.css";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 min-h-screen bg-no-repeat bg-cover backgroundImage">
        <Sidebar />
        <div className="grid col-span-2 self-center justify-center">
          <h1>Barbara Sagredo C</h1>
          <div className="flex justify-center space-x-2 items-center">
            <h3 className="text-gray-400">analog photographer</h3>
            <h3>|</h3>
            <h3>front end developer</h3>
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
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
