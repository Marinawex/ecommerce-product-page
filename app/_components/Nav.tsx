import logo from "../../public/images/logo.svg";
import MenuIcon from "../_components/icons/MenuIcon";
import Image from "next/image";
import React from "react";
import SideMenu from "./SideMenu";

const Nav = () => {
  return (
    <nav className="flex space-x-2 content-evenly items-start">
      <div className="self-center">
        <SideMenu
          children={
            <ul className="flex flex-col text-VeryDarkBlue ">
              <li className="">Collections</li>
              <li className="">Men</li>
              <li className="">Women</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          }
          openBtnProp={
            <MenuIcon
              fillColor={
                "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer lg:hidden "
              }
            />
          }
        />
      </div>
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
