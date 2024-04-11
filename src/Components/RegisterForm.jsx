import { Link } from "react-router-dom";


function RegisterForm() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent text-black">
      <div className="w-full max-w-sm text-center ">
        <h1 className="text-center text-3xl font-bold mb-6">REGISTER</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
          />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md focus:outline-none">
          Register
        </button>
        <hr className="my-6" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
