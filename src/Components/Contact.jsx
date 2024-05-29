import React from "react";
import { FaCheck } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="p-10 xl:p-0">
      <div className="max-w-7xl conatiner mx-auto md:mt-10 border rounded-3xl p-10 flex flex-col md:flex-row gap-10 bg-slate-800">
        <div className="md:w-[65%] flex flex-col gap-8">
          <span className="text-white font-semibold">
            DEDICATED SUPPORT AND EXPERT GUIDANCE.
          </span>
          <h6 className="text-white text-5xl font-bold">Enterprise</h6>
          <div className="text-white text-xl">
            <ul className="grid md:grid-cols-2 gap-5">
              <li className="flex items-center gap-2  ">
                <FaCheck />
                Whiteglove onboarding
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Custom features
              </li>
              <li className="flex items-center gap-2  ">
                <FaCheck />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Shared Slack channel
              </li>
              <li className="flex items-center gap-2  ">
                <FaCheck />
                Dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Custom Billing
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-[35%] bg-white flex border rounded-xl">
          <div className="flex flex-col gap-10 justify-center items-center p-10  text-center">
            <p className=" font-bold text-slate-500">
              Secure, reliable cross-platform desktop apps for enterprise teams.
            </p>
            <button className="px-5 py-3 bg-blue-700 text-white text-xl w-full font-semibold rounded-md border hover:opacity-95">
              Contact Sales
            </button>
            <p className="text-sm italic text-slate-400">
              You may also live chat with us by <a href=""><span className="underline">clicking here.</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
