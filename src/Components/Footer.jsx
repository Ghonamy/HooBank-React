import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
function Footer() {
  return (
    <div className="bg-(--main-color) px-7 md:px-30 py-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <img src={logo} className="w-[200px] md:max-w-full" />
            <p className="text-[18px] md:text-[20px] mt-5 text-[#707070] max-w-[350px]">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-[23px] mb-5">Useful Links</h3>
            <ul>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Content
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                How it Works
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Create
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Explore
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Terms & Services
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="text-[23px] mb-5">Community</h3>
            <ul>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Help Center
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Partners
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Suggestions
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Blog
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Newsletters
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="text-[23px] mb-5">Partner</h3>
            <ul>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Our Partner
              </li>
              <li className="mb-2 text-[#707070] text-[18px] cursor-pointer duration-300 hover:text-[#FFF]">
                Become a Partner
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-[#707070] my-10" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[15px] md:text-[18px] text-[#707070]">
            Copyright &copy; 2021 HooBank. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-8 mt-5">
            <img src={facebook} className="cursor-pointer" />
            <img src={linkedin} className="cursor-pointer" />
            <img src={twitter} className="cursor-pointer" />
            <img src={instagram} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
