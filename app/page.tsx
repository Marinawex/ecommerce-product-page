import Image from "next/image";
import avatar from "../public/imges/image-avatar.png";

import logo from "../public/imges/logo.svg";
import CartIcon from "./_components/icons/CartIcon";

import MenuIcon from "./_components/icons/MenuIcon";
import Product from "./_components/Product";

export default function Home() {
  return (
    <>
      <section
        id="Header"
        className="flex justify-between p-6 lg:mx-44 lg:mt-6"
      >
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
        <div className="flex space-x-6">
          <CartIcon
            fillColor={
              "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer self-center"
            }
          />
          <Image
            src={avatar}
            width={40}
            height={20}
            alt="/"
            className="hover:border-2 border-Orange rounded-full"
          />
        </div>
      </section>

      <hr className="hidden lg:flex mt-0 mx-44" />

      <Product />
    </>
  );
}
