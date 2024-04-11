import { useState } from "react";
import bubblegum from "../images/body butter and cream/body lotion ( blueberry) price 570-- 300ml/img1.jpg";
import Home from "./Home";

function Cart() {
  const [isOpen, setIsOpen] = useState(true); // State to control cart visibility

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Home />
      <div className={`side-navbar bg-white fixed top-0 left-0 ${isOpen ? "" : "hidden"}`}>
        
        <div className="h-full bg-white text-black flex flex-col justify-between fixed top-0 right-0 w-1/3 p-4 py-6">
          <div className="text-left">
            <h2 className="text-lg font-bold p-4 uppercase">CART</h2>
            <button className="close-button text-black hover:text-gray-700" onClick={handleClose}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <hr className="border-b border-gray-400" />
            <div className="p-4 flex items-center">
              <div className="flex-grow">
                <img src={bubblegum} alt="Product" className="w-auto h-20" />
              </div>
              <div className="flex-grow pl-4">
                <p className="text-sm font-semibold">Product Name</p>
                <p className="text-xs">Line color</p>
                <p className="text-xs">Size: M</p>
                <p className="text-xs">Qty: 1</p>
              </div>
            </div>
          </div>
          <button className="bg-black text-white py-2 rounded-md">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
