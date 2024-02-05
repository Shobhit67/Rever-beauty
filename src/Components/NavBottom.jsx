import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiUser } from "react-icons/ci";

function NavBottom() {
  return (
    <nav className="shadow-xl z-10 p-4 pb-6 fixed bottom-0 w-full bg-white visible lg:hidden border-t-4">

      <ul className="border-red-400 container mx-auto flex justify-between ">
        <li className="flex">
          <a href="#">
            <CiSearch className="text-2xl" />
          </a>
        </li>

        <li className="flex">
          <a href="#">
            <CiHeart className="text-2xl" />
          </a>
        </li>

        <li className="flex">
          <a href="#">
            <CiUser className="text-2xl" />
          </a>
        </li>
        
        <li className="flex">
          <a href="#">
            <CiShoppingCart className="text-2xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBottom;
