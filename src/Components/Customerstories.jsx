import React from "react";
import { FaCheck } from "react-icons/fa6";
import asset44 from "/src/assets/asset 44.svg";
import asset45 from "/src/assets/asset 45.jpeg";
import asset46 from "/src/assets/asset 46.png";
import asset47 from "/src/assets/asset 47.png";
import asset48 from "/src/assets/asset 48.jpeg";
const Customerstories = () => {
  return (
    <div className="w-full mt-10 ">
      <section className="max-w-7xl mx-auto p-10 xl:p-0 ">
        <div className="">
          <h5 className="text-5xl font-bold">Customer Stories</h5>
        </div>

        <div className="flex flex-col lg:flex-row items-start mt-10 border p-5 rounded-xl gap-8 overflow-hidden">
          <div className="flex flex-col gap-8 lg:w-[60%] sm:p-10">
            <img src={asset44} alt="" className="w-32" />
            <p className="text-xl font-normal md:text-2xl md:font-semibold">
              ClickUp used ToDesktop to get their desktop app in front of
              customers in days instead of months.
            </p>
            <div>
              <ul className="flex flex-col gap-3 sm:flex-row flex-wrap">
                <li className="border flex gap-2 items-center px-2 rounded-md bg-yellow-50 border-yellow-300 py-1 text-yellow-800 w-fit">
                  <FaCheck />
                  Chromeless UI
                </li>
                <li className="border flex gap-2 items-center px-2 rounded-md bg-yellow-50 border-yellow-300 py-1 text-yellow-800 w-fit">
                  <FaCheck />
                  Native spellcheck
                </li>
                <li className="border flex gap-2 items-center px-2 rounded-md bg-yellow-50 border-yellow-300 py-1 text-yellow-800 w-fit">
                  <FaCheck />
                  Task time in menubar
                </li>
                <li className="border flex gap-2 items-center px-2 rounded-md bg-yellow-50 border-yellow-300 py-1 text-yellow-800 w-fit">
                  <FaCheck />
                  Notification count in the dock
                </li>
                <li className="border flex gap-2 items-center px-2 rounded-md bg-yellow-50 border-yellow-300 py-1 text-yellow-800 w-fit">
                  <FaCheck />
                  Global hotkey to create task
                </li>
              </ul>
              <p className="mt-10 text-gray-600 text-lg">
                “ToDesktop provided us with a{" "}
                <span className="text-black">polished desktop app</span> in no
                time. Their expert team guided us through a smooth migration
                from our outdated legacy desktop app, enabling us to deliver{" "}
              </p>
              <div className="mt-10 flex gap-3">
                <div>
                  <img
                    src={asset45}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-semibold">Zeb Evans</h6>
                  <p className="text-gray-700">Founder & CEO, ClickUp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <img
              src={asset46}
              alt=""
              className="-mb-5 ml-5 mt-16"
            />
          </div>
        </div>
        {/* testimonials */}
        <div className="max-w-7xl container mx-auto flex flex-col md:flex-row mt-10 gap-5">
          <div className="bg-gray-50 margin-[1px] rounded-xl group hover:bg-gradient-to-br hover:from-pink-400 hover:to-pink-300 hover:via-blue-400">
            <div className="p-8 m-[2px] bg-slate-50 border rounded-xl flex-1 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-pink-50 group-hover:via-blue-100">
              <div className="flex gap-3 items-center">
                <FaCheck className="bg-violet-300 text-4xl border p-2 rounded-full w-12 h-12" />
                <h5 className="text-xl font-bold">Native APIs</h5>
              </div>
              <p className="text-lg font-light mt-5">
                What sets ToDesktop apart is its seamless integration with
                native APIs using our existing web codebase. By tapping into
                APIs like Tray and Notifications, we've crafted an exceptionally
                polished desktop user experience.
              </p>
              <div className="mt-5 flex gap-5">
                <div className="flex">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full border border-white -mr-5 overflow-hidden">
                    <img
                      src={asset47}
                      alt=""
                      className="min-w-16 min-h-16"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white overflow-hidden">
                    <img
                      src={asset48}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold">Rick Pastoor</h6>
                  <p className="text-gray-700">Founder & CEO, Rise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 margin-[1px] rounded-xl group hover:bg-gradient-to-br hover:from-pink-400 hover:to-pink-300 hover:via-blue-400">
            <div className="p-8 m-[2px] bg-slate-50 border rounded-xl flex-1 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-pink-50 group-hover:via-blue-100">
              <div className="flex gap-3 items-center">
                <FaCheck className="bg-violet-300 text-4xl border p-2 rounded-full w-12 h-12" />
                <h5 className="text-xl font-bold">Native APIs</h5>
              </div>
              <p className="text-lg font-light mt-5">
                What sets ToDesktop apart is its seamless integration with
                native APIs using our existing web codebase. By tapping into
                APIs like Tray and Notifications, we've crafted an exceptionally
                polished desktop user experience.
              </p>
              <div className="mt-5 flex gap-5">
                <div className="flex">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full border border-white -mr-5 overflow-hidden">
                    <img
                      src={asset47}
                      alt=""
                      className="min-w-16 min-h-16"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white overflow-hidden">
                    <img
                      src={asset48}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold">Rick Pastoor</h6>
                  <p className="text-gray-700">Founder & CEO, Rise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 margin-[1px] rounded-xl group hover:bg-gradient-to-br hover:from-pink-400 hover:to-pink-300 hover:via-blue-400">
            <div className="p-8 m-[2px] bg-slate-50 border rounded-xl flex-1 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-pink-50 group-hover:via-blue-100">
              <div className="flex gap-3 items-center">
                <FaCheck className="bg-violet-300 text-4xl border p-2 rounded-full w-12 h-12" />
                <h5 className="text-xl font-bold">Native APIs</h5>
              </div>
              <p className="text-lg font-light mt-5">
                What sets ToDesktop apart is its seamless integration with
                native APIs using our existing web codebase. By tapping into
                APIs like Tray and Notifications, we've crafted an exceptionally
                polished desktop user experience.
              </p>
              <div className="mt-5 flex gap-5">
                <div className="flex">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full border border-white -mr-5 overflow-hidden">
                    <img
                      src={asset47}
                      alt=""
                      className="min-w-16 min-h-16"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white overflow-hidden">
                    <img
                      src={asset48}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold">Rick Pastoor</h6>
                  <p className="text-gray-700">Founder & CEO, Rise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customerstories;
