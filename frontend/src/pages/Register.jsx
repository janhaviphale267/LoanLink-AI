import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#071428] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-yellow-500 text-black font-bold px-3 py-2 rounded-md">
            LL
          </div>
          <span className="text-white text-2xl font-semibold">LoanLink AI</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-white mb-2">
          Create Account
        </h1>
        <p className="text-gray-400 mb-8">
          Start your loan journey today
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Rajesh Kumar"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0F1F35] border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="rajesh@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0F1F35] border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Min 8 characters"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0F1F35] border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0F1F35] border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-gray-300 text-sm">Role</label>
            <select className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0F1F35] border border-gray-700 text-white focus:outline-none focus:border-yellow-500">
              <option>Loan Applicant</option>
              <option>Reviewer</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Create Account →
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-yellow-400 hover:underline">
              Sign In
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}