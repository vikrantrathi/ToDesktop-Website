import React from "react";
import { FaDownload } from "react-icons/fa";
import asset46 from "/src/assets/asset 46.png";
const Download = () => {
  return (
    <div className="w-full p-10">
      <div className="flex flex-col md:flex-row conatiner max-w-7xl mx-auto mt-10 bg-slate-800 rounded-3xl overflow-hidden">
        <div className="flex flex-col  md:p-10 p-5  md:w-[60%]">
          <h4 className="text-white">READY TO START BUILDING?</h4>
          <h2 className="text-2xl md:text-5xl text-white font-bold mt-5 leading-snug">
            Create your desktop app for free*
          </h2>
          <p className="mt-10 text-slate-300 text-xl">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <button className="bg-blue-500 mt-10 text-white p-2 text-[11px] md:text-lg rounded-md flex gap-3 justify-center items-center w-fit ">
            <FaDownload />
            Download ToDesktop Builder
          </button>
          <p className="mt-10 text-slate-400 text-sm italic">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        <div className="md:w-[40%] mt-10 right-0 bottom-0 ml-10">
          <img src={asset46} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default Download;
