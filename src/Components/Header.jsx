import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handlemenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className="p-2 shadow-md fixed w-full top-0 bg-white z-50">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <a href="">
            <div className="flex items-center">
              <img
                src="src/assets/asset 0.png"
                alt="Logo"
                className="h-12 w-12 mr-2 object-cover"
              />
              <span className="text-lg font-medium font-display">
                To Desktop
              </span>
            </div>
          </a>
          <div>
            <ul className=" hidden lg:flex space-x-10 font-medium">
              <li className="hover:text-primary">
                <a href="">Home</a>
              </li>
              <li className="hover:text-primary">
                <a href="">About</a>
              </li>
              <li className="hover:text-primary">
                <a href="">Services</a>
              </li>
              <li className="hover:text-primary">
                <a href="">Contact</a>
              </li>
              <li className="hover:text-primary">
                <a href="">Portfolio</a>
              </li>
            </ul>
          </div>
          <button className="hidden lg:flex gap-2 bg-white px-6 py-2 rounded-md border hover:border-slate-950 border-slate-850 items-center font-medium">
            <img src="./src/assets/asset 1.svg" alt="" />
            Get Started
            <IoArrowForward />
          </button>
          <RiMenu3Fill
            className="text-xl lg:hidden mr-2 "
            onClick={handlemenu}
          />
          {/* fixed div for toggle with close icon */}
          <div
            className={`z-50 fixed bg-white inset-0 p-2 lg:hidden ${
              isOpen ? "" : "hidden"
            } important!`}
          >
            <div className="container mx-auto flex flex-row items-center justify-between mb-2">
              <a href="">
                <div className="flex items-center">
                  <img
                    src="./src/assets/asset 0.png"
                    alt="Logo"
                    className="h-12 w-12 mr-2 object-cover"
                  />
                  <span className="text-lg font-medium font-display">
                    Vikrant Rathi
                  </span>
                </div>
              </a>
              <FaXmark
                className="text-xl lg:hidden mr-2 "
                onClick={handlemenu}
              />
            </div>
            <hr />
            <div>
              <ul className="flex flex-col items-start gap-2 m-5 p-3 font-medium md:mx-20">
                <li className="hover:text-primary hover:bg-gray-100 w-full px-3 py-2 rounded-lg">
                  Home
                </li>
                <li className="hover:text-primary hover:bg-gray-100 w-full px-3 py-2 rounded-lg">
                  About
                </li>
                <li className="hover:text-primary hover:bg-gray-100 w-full px-3 py-2 rounded-lg">
                  Services
                </li>
                <li className="hover:text-primary hover:bg-gray-100 w-full px-3 py-2 rounded-lg">
                  Contact
                </li>
                <li className="hover:text-primary hover:bg-gray-100 w-full px-3 py-2 rounded-lg">
                  Portfolio
                </li>
              </ul>
            </div>
            <hr />
            <button className="md:mx-20 mt-5 ml-8 flex shadow gap-2 bg-white px-6 py-2 rounded-md border hover:border-slate-950 border-slate-850 items-center font-medium">
              <img src="./src/assets/asset 1.svg" alt="" />
              Get Started
              <IoArrowForward />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
