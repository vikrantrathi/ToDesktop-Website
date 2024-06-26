import React, { useEffect } from "react";
import { LuCircleDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiDragMove2Line } from "react-icons/ri";
import asset2 from "/src/assets/asset 2.svg";
import asset3 from "/src/assets/asset 3.png";
import asset4 from "/src/assets/asset 4.png";
import asset5 from "/src/assets/asset 5.png";
import asset6 from "/src/assets/asset 6.png";
import asset7 from "/src/assets/asset 7.png";
import asset8 from "/src/assets/asset 8.png";
import asset9 from "/src/assets/asset 9.png";
import asset10 from "/src/assets/asset 10.png";
import asset11 from "/src/assets/asset 11.png";
import asset12 from "/src/assets/asset 12.png";
import asset13 from "/src/assets/asset 13.png";
import asset14 from "/src/assets/asset 14.png";
import asset15 from "/src/assets/asset 15.png";
import asset16 from "/src/assets/asset 16.png";
import asset17 from "/src/assets/asset 17.png";
import asset18 from "/src/assets/asset 18.png";
import asset19 from "/src/assets/asset 19.png";
import asset20 from "/src/assets/asset 20.png";
import asset21 from "/src/assets/asset 21.png";
import asset22 from "/src/assets/asset 22.png";
import asset23 from "/src/assets/asset 23.png";
import asset24 from "/src/assets/asset 24.png";
import asset25 from "/src/assets/asset 25.png";
import asset26 from "/src/assets/asset 26.png";
import asset27 from "/src/assets/asset 27.png";
import asset28 from "/src/assets/asset 28.png";
const Hero = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  useEffect(() => {
    const setupIntersectionObserver = (element, isLTR, speed) => {
      const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          document.addEventListener("scroll", scrollHandler);
        } else {
          document.removeEventListener("scroll", scrollHandler);
        }
      };

      const scrollHandler = () => {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if (isLTR) {
          totalTranslate = translateX + initialTranslateLTR;
        } else {
          totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
      };

      const observer = new IntersectionObserver(intersectionCallback);
      observer.observe(element);

      return () => {
        observer.disconnect();
        document.removeEventListener("scroll", scrollHandler);
      };
    };

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    if (line1 && line2 && line3) {
      setupIntersectionObserver(line1, true, 0.15);
      setupIntersectionObserver(line2, false, 0.15);
      setupIntersectionObserver(line3, true, 0.15);
    }
  }, []);
  return (
    <div>
      <section className="w-full lg:pt-28 pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
        <div className=" max-w-5xl flex items-start gap-8 justify-center mt-10 flex-col px-10 sm:items-center sm:container mx-auto sm:max-w-3xl">
          <div className=" flex gap-2 items-center border px-3 py-1 rounded-lg bg-yellow-50 border-yellow-300 shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
            <LuCircleDot className="text-yellow-500" />
            <p className="text-yellow-600 font-display font-medium sm:text-center">
              Lorem ipsum dolor sit.
            </p>
            <FaArrowRight className="text-yellow-600 group-hover:translate-x-1 transition duration-300" />
          </div>
          <div className="hidden lg:flex gap-8 mt-5 text-gray-500">
            <div className="flex gap-1 items-center text-lg">
              <FaRegFileCode className="text-xl" />
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="flex gap-1 items-center text-lg">
              <RiDragMove2Line className="text-xl" />
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="flex gap-1 items-center text-lg">
              <FaLaptopCode className="text-xl" />
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold leading-snug sm:text-center sm:text-6xl ">
              Web app to desktop app in minutes
            </h1>
          </div>
          <div>
            <p className="text-xl text-gray-800 sm:text-center sm:text-2xl">
              Take your web app codebase and transform it into a cross platform
              desktop app with native functionality.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center text-center justify-center">
            <button className="px-10 py-3 font-semibold text-white bg-primary border  shadow-sm rounded-lg hover:opacity-95">
              Download Now
            </button>
            <button className="px-10 border border-gray-400 font-semibold bg-white rounded-lg py-3 hover:border-gray-800">
              Read Docs
            </button>
          </div>
        </div>
        {/* companies  */}
        <div className="mt-16 flex gap-1 justify-center items-center">
          <img src={asset2} alt="" className="translate-y-2" />
          <span className="font-bold ">APPS POWERED BY TO DESKTOP</span>
          <img src={asset2} alt="" className="translate-y-2 -scale-x-100" />
        </div>
        {/* logo moving lines  */}
        <div className="mt-5 flex flex-col gap-4 overflow-hidden">
          {/* line 1 */}
          <div id="line1" className="flex gap-5 ">
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset3}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset4}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset5}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset6}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset7}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset8}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset9}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset10}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset11}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset12}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset13}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset14}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset15}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
          </div>
          {/* line 2 */}
          <div id="line2" className="flex gap-5 ">
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset16}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset17}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset18}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset19}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset20}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset21}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset22}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset23}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset24}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset25}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset26}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset27}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset28}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
          </div>
          {/* line 3 */}
          <div id="line3" className="flex gap-5  lg:hidden">
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset3}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset28}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset4}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset5}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset6}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset10}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset7}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset12}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset14}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset23}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset27}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset19}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src={asset20}
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
