import { Link } from "react-router-dom";


function LoginForm() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent text-black">
      <div className="w-full max-w-sm text-center ">
        <h1 className="text-center text-3xl font-bold mb-6">LOGIN WITH OTP</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
          />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md focus:outline-none">
          Request OTP
        </button>
        <hr className="my-6" />
        <a href="#">
          <p>Sign-in-with Email</p>
        </a>
        <strong>
          <p>OR</p>
        </strong>
        <Link to ="/register">
          <p>Don't have account?</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
