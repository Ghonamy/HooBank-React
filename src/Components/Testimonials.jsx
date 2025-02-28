import React from "react";
import quote from "../assets/quotes.svg";
import { TestimonialsData } from "../Data";
function Testimonials() {
  return (
    <div className="bg-(--main-color) py-16 px-7 md:px-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl text-center text-white">
          What People are Saying about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14">
          {TestimonialsData.map((testimonial) => {
            const { id, name, job, quote, personImage, description } =
              testimonial;
            return (
              <div
                key={id}
                className="bg-[#20212f] px-5 py-8 md:py-14 rounded-2xl duration-500 cursor-pointer hover:bg-transparent"
              >
                <img src={quote} />
                <p className="text-white text-[18px] my-8">{description}</p>
                <div className="flex items-center mt-5">
                  <img src={personImage} className="w-[60px] mr-5" />
                  <div className="text-white">
                    <h3 className="text-[20px]">{name}</h3>
                    <p className="text-[18px] text-[#707070]">{job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
