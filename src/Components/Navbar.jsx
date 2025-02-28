import React, { useState } from "react";
import logo from "../assets/logo.svg";
import burgerMenu from "../assets/menu.svg";
import xMark from "../assets/close.svg";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="bg-(--main-color) px-7 md:px-30 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-[100px] md:w-[180px]" />
          <ul className="hidden md:flex items-center space-x-16 text-white text-[18px]">
            <li>
              <a href="#" className="duration-300 text-(--secondary-color)">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 hover:text-(--secondary-color)"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 hover:text-(--secondary-color)"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 hover:text-(--secondary-color)"
              >
                Solution
              </a>
            </li>
          </ul>
          <div className="md:hidden cursor-pointer w-[30px]" onClick={toggleMenuOpen}>
            {menuOpen ? (
              <img src={xMark} />
            ) : (
              <img src={burgerMenu} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 pt-60 left-0 w-[250px] h-full bg-(--main-color) text-white transition-transform duration-300 z-10 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center h-full space-y-8 text-white text-[20px]">
          <li>
            <a href="#" className="duration-300 text-(--secondary-color)">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 hover:text-(--secondary-color)">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 hover:text-(--secondary-color)">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 hover:text-(--secondary-color)">
              Solution
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
