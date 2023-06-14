import Image from "next/image";
import avatar from "../public/imges/image-avatar.png";
import product1 from "../public/imges/image-product-1.jpg";
import product2 from "../public/imges/image-product-2.jpg";
import product3 from "../public/imges/image-product-2.jpg";
import product4 from "../public/imges/image-product-4.jpg";
import logo from "../public/imges/logo.svg";
import CartIcon from "./_components/icons/CartIcon";
import RightArrow from "./_components/icons/RightArrow";
import LeftArrow from "./_components/icons/LeftArrow";
import MinusIcon from "./_components/icons/MinusIcon";
import PlusIcon from "./_components/icons/PlusIcon";
import MenuIcon from "./_components/icons/MenuIcon";

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

      <main id="Product" className="lg:flex lg:mx-44 lg:p-10 ">
        <div id="light-box flex flex-row">
          <LeftArrow
            strokeColor={
              "stroke-current text-Black hover:text-Orange cursor-pointer "
            }
          />
          <Image src={product1} alt=" /" className="lg:rounded-xl"></Image>
          <Image src={product2} height={300} alt="/" className="hidden"></Image>
          <Image src={product3} height={300} alt="/" className="hidden"></Image>
          <Image src={product4} height={300} alt="/" className="hidden"></Image>
          <RightArrow
            strokeColor={
              "stroke-current text-Black hover:text-Orange cursor-pointer"
            }
          />
        </div>

        <div className="p-6 lg:p-10 lg:m-10 lg:pr-36 lg:space-y-6 space-y-4">
          <h2 className="text-Orange text-lg ">Sneaker Company</h2>

          <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>

          <p className="text-DarkGrayishBlue lg:py-8">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between lg:justify-start lg:space-x-4">
            <div id="price" className="font-bold text-3xl"> $125.00</div>
            <div
              id="discount-percentage"
              className="text-Orange bg-PaleOrange px-2 rounded-md text-center"
            >
              50%
            </div>
            <div
              id="price-before-discount"
              className="text-DarkGrayishBlue line-through"
            >
              {" "}
              $250.00
            </div>
          </div>
          <div className="lg:flex lg:space-x-10">
            <div
              id="Amount"
              className="bg-LightGrayishBlue grow-1  lg:px-10 flex justify-evenly items-center p-4 rounded-md lg:space-x-8"
            >
              <MinusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
              <div className="font-bold">0</div>
              <PlusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
            </div>
            <button className="bg-Orange hover:opacity-75 flex justify-center grow-1 w-full text-White mt-4 lg:mt-0 lg:mr-6 p-4 rounded-md ">
              <CartIcon fillColor={"fill-current text-White mr-4 "} />
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
