// NotFound.jsx
import { Link } from "react-router-dom";
import Header from "../common/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for does not exist.
          </p>
          <img
            src="/404.jpg"
            alt="Not Found Illustration"
            className="max-w-full h-auto"
          />
          <Link
            to="/"
            className="bg-[#F36326] text-white py-2 px-4 rounded inline-block mt-4"
          >
            Back to Main News Source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
