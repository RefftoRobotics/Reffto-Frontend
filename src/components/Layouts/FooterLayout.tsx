import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import RefftoLogo from "../../assets/refftologo.png";
import PlayStore from "../../assets/playStore.png";
import AppStore from "../../assets/appStore.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 text-center">
          {/* Logo and Contact Section - Full width on mobile, larger content */}
          <div className="col-span-2 lg:col-span-1 space-y-6 mb-8 lg:mb-0">
            <Link to="/" className="block">
              <img
                src={RefftoLogo || "/placeholder.svg"}
                alt="Reffto Logo"
                width={240}
                height={84}
                className="h-16 w-auto"
              />
              <p className="text-indigo-700 text-lg mt-2">
                Your Ideas, Our Parts
              </p>
            </Link>

            {/* Contact Info */}
            <div className="flex items-start space-x-4">
              <MdHeadsetMic className="h-8 w-8 mt-1 flex-shrink-0 text-gray-600" />
              <div>
                <p className="text-lg text-gray-600">Need help? Call us on </p>
                <p className="text-2xl font-semibold break-words">
                  <a href="tel:18002666123" className="hover:text-indigo-700">
                    98765
                  </a>{" "}
                  <a href="tel:02068197600" className="hover:text-indigo-700">
                    43210
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-5">
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors"
              >
                <FaFacebookF className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors"
              >
                <FaTwitter className="h-7 w-7" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors"
              >
                <FaLinkedinIn className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors"
              >
                <FaInstagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors"
              >
                <FaYoutube className="h-7 w-7" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Information Column */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/track-order"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  to="/videos"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account Column */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">My Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  to="/my-account"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/payment-options"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Payment Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/robu-b2b"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Robu B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/investor-relations"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  to="/macfos-csr"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  MACFOS CSR
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-refund"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  Shipping & Refund
                </Link>
              </li>
              <li>
                <Link
                  to="/e-waste-collection"
                  className="text-gray-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  E-Waste Collection
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Download Our App
            </h3>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <Link
                to="#"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src={PlayStore || "/placeholder.svg"}
                  alt="Download on Google Play"
                  width={135}
                  height={40}
                  className="h-auto w-[135px]"
                />
              </Link>
              <Link
                to="#"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src={AppStore || "/placeholder.svg"}
                  alt="Download on App Store"
                  width={135}
                  height={40}
                  className="h-auto w-[135px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright - Full width */}
        <div className=" border-t border-gray-200 flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-600 sm:text-left">
            © Reffto is registered trademark of REFFTO LIMITED - All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
