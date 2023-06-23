import React from "react";
import Image from "next/image";
import avatar from "../../public/images/image-avatar.png";
import Nav from "./Nav";
import CartStatusIcon from "./cart/CartStatusIcon";

function Header() {
  return (
    <header id="Header" className="flex justify-between p-6 lg:mx-44 lg:mt-6">
      <Nav />
      <div className="flex space-x-6">
        <CartStatusIcon />

        <Image
          src={avatar}
          width={40}
          height={20}
          alt="/"
          className="border-2 hover:border-Orange rounded-full w-auto h-auto cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
