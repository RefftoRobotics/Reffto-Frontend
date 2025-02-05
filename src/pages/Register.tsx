import { Link } from "react-router-dom";
import Logo from "../assets/refftologo.png"

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-orange-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img
            src={Logo}
            alt="REFFTO"
            width={80}
            height={80}
            className="rounded-full bg-purple-100 p-2"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Reffto Account
        </h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
