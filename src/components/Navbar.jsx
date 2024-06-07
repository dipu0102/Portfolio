import React, { useState } from "react";
import photoavater from "/photo.avif";
import "../App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, SetMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-sm h-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 ">
            <img src={photoavater} alt="" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Dipanka<span className="text-green-500 text-2xl">r</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200  cursor-pointer select-none"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => SetMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile Navbar */}

        {menu && (
          <div>
            <ul className="md:hidden flex flex-col  h-screen items-center justify-center space-y-4">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer select-none"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
