import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import asset0 from "/src/assets/asset 0.png";
import asset54 from "/src/assets/asset 54.svg";
const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl container mx-auto mt-10  p-10">
        <div className="py-10 px-8 border flex md:flex-row flex-col-reverse md:justify-between gap-10 align-center rounded-xl bg-gray-50 border-gray-200">
          <div className="flex items-center justify-center">
            <img
              src={asset0}
              alt="Logo"
              className="h-12 w-12 mr-2 object-cover"
            />
            <span className="text-lg font-semibold font-display">
              To Desktop
            </span>{" "}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-gray-700">
            <div>
              <a href="" className="text-xl font-semibold">
                Doccumentation
              </a>
            </div>
            <div className="flex gap-5">
              <a href="">
                <FaGithub className="text-2xl" />
              </a>

              <a href="">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-5 text-gray-500">
          <div className="flex justify-center items-center gap-3">
            <img src={asset54} alt="" className="w-5" />
            <p> A Y Combinator company.</p>
          </div>
          <div>
            <p className="text-center">&copy; 2024 Vikrant Rathi, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
