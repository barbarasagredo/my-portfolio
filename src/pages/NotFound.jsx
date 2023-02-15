import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col content-end items-center space-y-4 pt-6">
        <h1 className="py-4 text-8xl text-strong-pink font-bold">404</h1>
        <h2>Page not found</h2>
        <p>
          Sorry, the page you're looking for doesn't exist or is unavailable.
        </p>
        <Link
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          to={"/"}
        >
          Back to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
