import React from "react";
import star from "../assets/Star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";

function Services() {
  return (
    <div className="bg-(--main-color) py-10 px-7 md:px-30 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-36">
            <h2 className="text-3xl md:text-5xl font-bold">
              You do the Business,
              <br /> we'll handle the money.
            </h2>
            <p className="text-[18px] my-10 text-[#707070] max-w-2xl">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <a
              href="#"
              className="text-(--main-color) bg-(--secondary-color) px-3 py-2 rounded-xl text-[22px] shadow-[0_0_5px_#5ce1e6] font-bold"
            >
              Get Started
            </a>
          </div>
          <div className="mt-10">
            <div className="flex mb-10 duration-500 hover:bg-[#20212f] hover:rounded-2xl p-4 cursor-pointer">
              <img src={star} className="mr-5" />
              <div>
                <h3 className="text-[20px] font-bold mb-2">Rewards</h3>
                <p className="text-[#707070] max-w-[400px]">
                  The best credit cards offer some tantalizing combinations of
                  promotions and prizes.
                </p>
              </div>
            </div>
            <div className="flex mb-10 bg-[#20212f] rounded-2xl p-4 cursor-pointer">
              <img src={shield} className="mr-5" />
              <div>
                <h3 className="text-[20px] font-bold mb-2">100% Secured</h3>
                <p className="text-[#707070] max-w-[350px]">
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </div>
            <div className="flex mb-10 duration-500 hover:bg-[#20212f] hover:rounded-2xl p-4 cursor-pointer">
              <img src={send} className="mr-5" />
              <div>
                <h3 className="text-[20px] font-bold mb-2">Balance Transfer</h3>
                <p className="text-[#707070] max-w-[350px]">
                  A balance transfer credit card can save you a lot of money in
                  interest charged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
