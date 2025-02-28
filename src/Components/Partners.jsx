import React from "react";
import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import dropbox from "../assets/dropbox.png";
import coinbase from "../assets/coinbase.png";
function Partners() {
  return (
    <div className="bg-(--main-color) px-7 md:px-30 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-5 items-center">
          <img src={airbnb} alt="Airbnb" className="max-w-full md:max-w-[250px]" />
          <img src={binance} alt="Binance" className="max-w-full md:max-w-[250px]" />
          <img src={dropbox} alt="Dropbox" className="max-w-full md:max-w-[250px]" />
          <img src={coinbase} alt="Coinbase" className="max-w-full md:max-w-[250px]" />
        </div>
        <div className="bg-[#20212f] px-5 md:px-20 py-5 md:py-14 flex flex-col md:flex-row items-center justify-between rounded-2xl mt-10 md:mt-16">
          <div>
            <h2 className="text-white text-[30px] md:text-[40px] font-bold mb-8">
              Let's Try Our Service now!
            </h2>
            <p className="text-[#b9b9b9] text-[18px] md:text-[20px]">
              Everything you need to accept card payments <br />
              and grow your buisness anywhere on the planet.
            </p>
          </div>
          <a
            href="#"
            className="bg-(--secondary-color) px-6 py-3 rounded-xl text-[18px] md:text-[20px] shadow-[0_0_5px_#5ce1e6] md:mr-16 mt-5 md:mt-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
