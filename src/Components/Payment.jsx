import React from "react";
import payment from "../assets/card.png";
function Payment() {
  return (
    <div className="bg-(--main-color) px-7 md:px-30 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-[30px] md:text-5xl leading-normal">
              Find a Better Card Deel <br /> in Few Easy Steps.
            </h1>
            <p className="text-[#707070] text-[16px] md:text-[18px] max-w-[500px] my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reiciendis excepturi labore, recusandae rem iste impedit rerum,
              inventore velit.
            </p>
            <a
              href="#"
              className="text-(--main-color) bg-(--secondary-color) px-3 py-2 rounded-xl text-[22px] shadow-[0_0_5px_#5ce1e6] font-bold inline-block mt-5"
            >
              Get Started
            </a>
          </div>
          <img src={payment} className="w-[300px] md:max-w-[500px] mt-10" />
        </div>
      </div>
    </div>
  );
}

export default Payment;
