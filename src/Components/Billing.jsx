import React from "react";
import billing from "../assets/bill.png";
import appStore from "../assets/apple.svg";
import googlePlay from "../assets/google.svg";
function Billing() {
  return (
    <div className="bg-(--main-color) py-10 px-7 md:px-30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <img src={billing} className="w-[300px] md:w-[650px] md:mr-20" />
          <div>
            <h2 className="text-[35px] md:text-[50px] font-bold text-white leading-normal">
              Easily Control Your <br />
              Billing & Invoicing.
            </h2>
            <p className="text-[#707070] my-5 max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reiciendis excepturi labore, recusandae rem iste impedit rerum,
              inventore velit.
            </p>
            <div className="flex mt-10">
              <img src={appStore} className="mr-5 cursor-pointer" />
              <img src={googlePlay} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
