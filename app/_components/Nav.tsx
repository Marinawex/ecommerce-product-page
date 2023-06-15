import logo from "../../public/images/logo.svg";
import MenuIcon from "../_components/icons/MenuIcon";
import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex space-x-2 content-evenly items-start">
      <MenuIcon
        fillColor={
          "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer lg:hidden self-center"
        }
      />
      <Image src={logo} alt="" className="self-center lg:self-start" />
      <ul className=" hidden lg:flex flex-row text-DarkGrayishBlue space-x-5 pl-8">
        <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer">
          Collections
        </li>
        <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer">
          Men
        </li>
        <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer">
          Women
        </li>
        <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer">
          About
        </li>
        <li className="hover:text-Black pb-4 border-transparent border-b-2 lg:hover:border-Orange cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
