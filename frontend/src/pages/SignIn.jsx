import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071428] px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-yellow-500 text-black px-3 py-2 rounded-lg font-semibold">
            LL
          </div>
          <span className="text-white text-2xl font-semibold">
            LoanLink AI
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white mb-2">
          Welcome back
        </h1>

        <p className="text-gray-400 mb-8">
          Sign in to access your loan dashboard
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="rajesh@example.com"
              className="w-full bg-[#1A2437] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#1A2437] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
              />
              <span className="absolute right-4 top-3.5 text-gray-400 text-sm">
                👁
              </span>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-yellow-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-yellow-500 hover:underline"
            >
              Forgot password?
            </button>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
          >
            Sign In →
          </button>

        </form>

        {/* Register link */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-500 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}