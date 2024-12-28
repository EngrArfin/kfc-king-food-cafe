import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Share/NavBar";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
    // Add your login logic here
  };

  return (
    <div>
      <NavBar />
      <div className=" mt-10 flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Login
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Please enter your credentials
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
