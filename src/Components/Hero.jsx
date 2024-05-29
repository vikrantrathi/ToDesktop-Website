import React, { useEffect } from "react";
import { LuCircleDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiDragMove2Line } from "react-icons/ri";

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
              Lorem ipsum dolor sit amet.
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
        <div className="mt-16 flex gap-2 justify-center items-center">
          <img
            src="./src/assets/asset 2.svg"
            alt=""
            className="translate-y-2"
          />
          <span className="font-bold ">APPS POWERED BY TO DESKTOP</span>
          <img
            src="./src/assets/asset 2.svg"
            alt=""
            className="translate-y-2 -scale-x-100"
          />
        </div>
        {/* logo moving lines  */}
        <div className="mt-5 flex flex-col gap-4 overflow-hidden">
          {/* line 1 */}
          <div id="line1" className="flex gap-5 ">
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 3.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 4.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 5.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 6.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 7.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 8.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 9.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 10.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 11.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 12.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 13.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 14.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 15.png"
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
                src="./src/assets/asset 16.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 17.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 18.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 19.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 20.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 21.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 22.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 23.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 24.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 25.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 26.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 27.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 28.png"
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
                src="./src/assets/asset 3.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 29.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 4.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 5.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 6.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 10.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 7.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 12.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 14.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 23.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 27.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 19.png"
                alt=""
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="text-sm md:text-md font-medium">Lorem</span>
            </div>
            <div className="md:min-h-32 md:min-w-36 min-h-24 min-w-24 flex flex-col items-center justify-center border-2 rounded-xl bg-white ">
              <img
                src="./src/assets/asset 20.png"
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
