import React, { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  useEffect(() => {
    const handleToggle = (event) => {
      const element = event.currentTarget;
      const ddId = element.getAttribute("aria-controls");
      const ddElement = document.getElementById(ddId);
      const ddArrowicon = element.children[1]; // Access the second child element (icon)

      ddElement.classList.toggle("hidden");
      ddArrowicon.classList.toggle("-rotate-180");
    };

    const dtElements = document.querySelectorAll("dt");

    dtElements.forEach((element) => {
      element.addEventListener("click", handleToggle);
    });

    // Clean up event listeners on component unmount
    return () => {
      dtElements.forEach((element) => {
        element.removeEventListener("click", handleToggle);
      });
    };
  }, []);

  return (
    <div>
      <div className="max-w-7xl container mx-auto mt-10 p-10 md:p-5 xl:p-0">
        <div className="md:w-[40%] text-5xl font-bold">FAQs</div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-1"
            >
              <p>Is ToDesktop For Me?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-1">
              ToDesktop uses a technology called Electron. You don’t need
              Electron (or even coding) experience to create a desktop app with
              ToDesktop. Rest assured, the underlying “browser” engine is
              updated regularly through auto-updates. So the desktop version of
              your app will always have the latest web features available.
            </dd>
          </div>
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-2"
            >
              <p>How does ToDesktop work?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-2">
              ToDesktop wraps your web app in Electron, providing you with
              a desktop app that runs independently of the browser. This means
              users can launch your app directly from their desktop, just like
              any other software.
            </dd>
          </div>
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-3"
            >
              <p>How does ToDesktop work?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-3">
              ToDesktop wraps your web app in Electron, providing you with
              a desktop app that runs independently of the browser. This means
              users can launch your app directly from their desktop, just like
              any other software.
            </dd>
          </div>
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-4"
            >
              <p>How does ToDesktop work?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-4">
              ToDesktop wraps your web app in Electron, providing you with
              a desktop app that runs independently of the browser. This means
              users can launch your app directly from their desktop, just like
              any other software.
            </dd>
          </div>
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-5"
            >
              <p>How does ToDesktop work?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-5">
              ToDesktop wraps your web app in Electron, providing you with
              a desktop app that runs independently of the browser. This means
              users can launch your app directly from their desktop, just like
              any other software.
            </dd>
          </div>
          <div className="border rounded-xl border-gray-200 bg-gray-50 p-6 group">
            <dt
              className="cursor-pointer flex justify-between text-xl md:text-2xl font-semibold"
              aria-controls="faq-6"
            >
              <p>How does ToDesktop work?</p>
              <IoIosArrowUp className="-rotate-180 transition-transform" />
            </dt>
            <dd className="hidden mt-5 text-xl font-light" id="faq-6">
              ToDesktop wraps your web app in Electron, providing you with
              a desktop app that runs independently of the browser. This means
              users can launch your app directly from their desktop, just like
              any other software.
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
