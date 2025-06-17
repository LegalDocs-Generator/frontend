import { Link } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50 text-center animate-fade-in">
      <FaRegSadTear className="text-7xl text-[#2e3a59] mb-4 animate-bounce" />
      <p className="text-7xl font-bold text-[#2e3a59] mb-2">404</p>
      <p className="text-2xl font-semibold text-[#2e3a59] mb-2">
        Page Not Found
      </p>
      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="button save_button"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
