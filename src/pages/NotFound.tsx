import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-custom py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary inline-block">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
