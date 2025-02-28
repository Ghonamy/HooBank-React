import React, { useEffect, useState } from "react";
import discount from "../assets/Discount.svg";
import mainImage from "../assets/robot.png";
import { IoIosArrowUp } from "react-icons/io";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-(--main-color) py-5 md:py-10 px-7 md:px-30 h-screen relative">
      <div className="container mx-auto">
        <div className="flex mt-5 md:mt-20 items-center">
          <div>
            <div className="flex items-center bg-[#202134] px-2 py-1 rounded-full w-fit">
              <img src={discount} alt="discount" className="mr-2" />
              <p className="text-[#808080] text-[14px] md:text-[18px]">
                <span className="text-white">20%</span> DISCOUNT FOR{" "}
                <span className="text-white">1 MONTH</span> ACCOUNT
              </p>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-bold md:leading-18 my-5">
              The Next <br />
              <span className="text-(--secondary-color)">Generation</span>{" "}
              <br />
              Payment Method.
            </h1>
            <p className="text-[#808080] text-[16px] md:text-[19px] md:max-w-xl">
              Our team of experts uses methodology to identify the credit card
              most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
          </div>
          <img
            src={mainImage}
            className="max-w-[300px] md:max-w-[550px] absolute right-0 bottom-14 md:bottom-30"
          />
        </div>
      </div>
      <div className="container mx-auto flex items-center space-x-3 md:space-x-10 mt-5 md:mt-16 text-white text-[12px] md:text-[23px] font-bold uppercase text-center">
        <p>
          3800+{" "}
          <span className="text-(--secondary-color)">
            User Active <span className="ml-10 md:ml-5">|</span>
          </span>
        </p>
        <p>
          280+{" "}
          <span className="text-(--secondary-color)">
            Trusted By Company <span className="ml-10 md:ml-5">|</span>
          </span>
        </p>
        <p>
          $230M+ <span className="text-(--secondary-color)">Transactions</span>
        </p>
      </div>
      <div
        className={`fixed right-5 bottom-10 h-[40px] w-[40px] rounded-full p-2 bg-[var(--secondary-color)] text-white flex justify-center items-center cursor-pointer transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <IoIosArrowUp className="text-[25px]" />
      </div>
    </div>
  );
}

export default Home;
