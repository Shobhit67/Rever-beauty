import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-14 px-14 border-1 border-y border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul>
              <li>
                <a href="#">About Reverbeauty</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Return and Exchange</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul>
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Temporary Number: +123456789</li>
              <li>
                <a href=""> <FaWhatsapp className = "text-2xl"/></a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4">
                <a href="#">
                  <i>
                    <FaFacebook className="text-2xl" />
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/giselacosmetics.in?igsh=dHh4MHpmNThhc3Rw">
                  <i>
                    <FaInstagram className="text-2xl" />
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <i>
                    <FaTwitter className="text-2xl" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <FaLinkedin className="text-2xl" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
