import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiUser } from "react-icons/ci";

function NavBottom() {
  return (
    <nav className="shadow-xl py-4 pb-6 bottom-0 w-full bg-white visible lg:hidden border-t-4 fixed">
      <ul className="container mx-auto flex justify-between px-8">
        <li className="flex">
          <a href="#">
            <CiSearch className="text-2xl" />
          </a>
        </li>

        <li className="flex">
          <Link to="/favourites">
            <CiHeart className="text-2xl" />
          </Link>
        </li>

        <li className="flex">
          <Link to="/login">
            <CiUser className="text-2xl cursor-pointer" />
          </Link>
        </li>

        <li className="flex">
          <Link to="/cart">
            <CiShoppingCart className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBottom;
