import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Not Found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-[5rem] font-extrabold text-blue-600 mb-2">404</h1>
        <p className="text-xl font-semibold text-gray-700 mb-3">
          Oops! Page not found
        </p>
        <p className="text-gray-500 mb-8">
          The page <span className="font-mono">{location.pathname}</span> doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
