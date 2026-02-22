import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 fade-in">

      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <div className="bg-yellow-500 text-black px-2 py-1 rounded">LL</div>
        LoanLink AI
      </div>

      {/* Actions */}
      <div className="flex gap-6 items-center">

        {/* Sign In */}
        <Link
          to="/signin"
          className="text-gray-300 transition-colors duration-300 hover:text-white"
        >
          Sign In
        </Link>

        {/* Get Started */}
        <Link
          to="/register"
          className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}