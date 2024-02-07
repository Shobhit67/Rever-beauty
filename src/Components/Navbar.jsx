import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiUser } from "react-icons/ci";
import logoName from "../images/logo-name.jpeg";

function Navbar() {
  return (
    <nav className="shadow-lg p-4 bg-white fixed top-0 left-0 w-full "> 
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger icon */}
          <div className="flex items-center ">
            <button className="block focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        {/* Logo */}
        <div className="flex items-center lg:ml-16 ">
          <a href="#">
            <img src={logoName} alt="Logo" className="lg:h-14 h-10" />
          </a>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-8 justify-between">
          <li>
            <a href="#">
              <CiSearch className="text-2xl" />
            </a>
          </li>
          <li className="hidden lg:block">
            <a href="#">
              <CiHeart className="text-2xl" />
            </a>
          </li>
          <li className="hidden lg:block">
            <a href="#">
              <CiUser className="text-2xl" />
            </a>
          </li>
          <li className="hidden lg:block">
            <a href="#">
              <CiShoppingCart className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
