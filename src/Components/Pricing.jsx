import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Pricing = () => {
  return (
    <div className="w-full p-10 xl:p-0">
      <div className="max-w-7xl conatiner mx-auto">
        <div className="md:w-[40%] text-5xl font-bold">
          Choose a Plan that fits your needs
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl container mx-auto mt-10 gap-10">
        <div className="border p-5 md:p-10 flex flex-1 flex-col gap-8 bg-slate-50 rounded-2xl">
          <h5 className="text-4xl font-semibold">Free</h5>
          <p className="text-xl font-light">
            For personal use or testing your app before deploying to customers.
          </p>
          <h6 className="font-semibold">KEY FEATURES</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />

              <span>Free for personal use</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />
              <span>Run app locally</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />
              <span>No Code Signing</span>{" "}
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />

              <span>No Native Installers</span>
            </li>
          </ul>
          <button className="border p-3 rounded-md bg-white text-xl font-semibold text-blue-700 w-full hover:border-slate-500 mt-2 ">
            Get Started
          </button>
        </div>
        <div className="border  p-5 md:p-10  flex flex-1 flex-col gap-8 bg-slate-50 rounded-2xl">
          <h5 className="text-4xl font-semibold">Essential</h5>

          <p className="text-xl font-light">For simple desktop apps.</p>
          <h6 className="text-2xl font-bold">
            $99 <span className="font-normal">/month</span>
          </h6>
          <h6 className="font-semibold">KEY FEATURES</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />

              <span>Free for personal use</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />
              <span>Run app locally</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />
              <span>No Code Signing</span>{" "}
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />

              <span>No Native Installers</span>
            </li>
          </ul>
          <button className="border p-3 rounded-md bg-white text-xl font-semibold text-blue-700 w-full hover:border-slate-500">
            Get Started
          </button>
        </div>
        <div className="border  p-5 md:p-10  flex flex-1 flex-col gap-8 bg-slate-50 rounded-2xl">
          <div className="absolute ml-32 -mt-8 sm:ml-80 md:ml-96 md:-mt-14 lg:ml-40 border px-3 sm:px-5 sm:py-1 border-slate-400 bg-blue-300 text-blue-700 font-medium rounded-full">
            Most Popular
          </div>
          <h5 className="text-4xl font-semibold">Professional</h5>

          <p className="text-xl font-light">For sophisticated desktop apps.</p>
          <h6 className="text-2xl font-bold">
            $240 <span className="font-normal">/month</span>
          </h6>
          <h6 className="font-semibold">KEY FEATURES</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />

              <span>Free for personal use</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <FaCheck />
              <span>Run app locally</span>
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />
              <span>No Code Signing</span>{" "}
            </li>
            <li className="flex gap-2 items-center text-xl font-light">
              <RxCross1 />

              <span>No Native Installers</span>
            </li>
          </ul>
          <button className="border p-3 rounded-md text-white text-xl font-semibold bg-blue-700 w-full hover:border-slate-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
