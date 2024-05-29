import React, { useEffect } from "react";

const Companiesline = () => {
  const initialTranslateLTR = -56 * 4;
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

    const line = document.getElementById("line");
    if (line) {
      setupIntersectionObserver(line, true, 0.3);
    }
  }, []);
  return (
    <div className="px-10">
      <div className="max-w-7xl container mx-auto mt-16 border rounded-lg overflow-hidden">
        <div className="flex gap-8 p-6 " id="line">
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
          <h3 className="my-0 mx-2 text-2xl font-semibold whitespace-nowrap">
            Analytics dashboard
          </h3>
          <span>⦿</span>
        </div>
      </div>
    </div>
  );
};

export default Companiesline;
