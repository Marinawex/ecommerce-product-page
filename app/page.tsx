import Image from "next/image";
import avatar from "../public/imges/image-avatar.png";
import cart from "../public/imges/icon-cart.svg";
import product1 from "../public/imges/image-product-1.jpg";
import product2 from "../public/imges/image-product-2.jpg";
import product3 from "../public/imges/image-product-2.jpg";
import product4 from "../public/imges/image-product-4.jpg";
import menu from "../public/imges/burger-menu-svgrepo-com.svg";
import logo from "../public/imges/logo.svg";
import plus from "../public/imges/icon-plus.svg";
import minus from "../public/imges/icon-minus.svg";
import CartIcon from "./components/icons/CartIcon";

export default function Home() {
  return (
    <>
      <section id="Header" className="flex justify-between p-6">
        <nav className="flex space-x-2 content-evenly items-center">
          <Image src={menu} width={23} height={22} alt="" className="lg:hidden"/>
          <Image src={logo} alt="" />
          <ul className=" hidden lg:flex flex-row text-DarkGrayishBlue space-x-5 pl-8">
            <li className="hover:text-Black">Collections</li>
            <li className="hover:text-Black">Men</li>
            <li className="hover:text-Black">Women</li>
            <li className="hover:text-Black">About</li>
            <li className="hover:text-Black">Contact</li>
          </ul>
        </nav>
        <div className="flex space-x-6">
          <CartIcon fillColor={"fill-current text-DarkGrayishBlue hover:text-Orange"}/>
          <Image src={avatar} width={25} height={15} alt="/" className="hover:border-2 border-Orange rounded-full"/>
        </div>
      </section>

      <main id="Product" className="flex">
        <Image src={product1} height={300} alt="/"></Image>
        <Image src={product2} height={300} alt="/"></Image>
        <Image src={product3} height={300} alt="/"></Image>
        <Image src={product4} height={300} alt="/"></Image>
      </main>

      <div className="p-6 space-y-4">
        <h2 className="text-Orange">Sneaker Company</h2>

        <h1 className="">Fall Limited Edition Sneakers</h1>

        <p className="text-DarkGrayishBlue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between ">
          <div id="price"> $125.00</div>
          <div id="discount-percentage" className="text-Orange bg-PaleOrange px-2 rounded-md">50%</div>
          <div id="price-before-discount" className="text-DarkGrayishBlue line-through"> $250.00</div>
        </div>

        <div id="Cart-Items " className="bg-LightGrayishBlue grow-1 flex justify-around p-4 rounded-md">
        
        <Image src={minus}  width={20} height={2} alt=''/>
          <div className="">0</div>
          <Image src={plus}  width={20} height={2} alt=''/>
        </div>
        <button className="bg-Orange grow-1 w-full text-White p-3 rounded-md">Add to cart</button>
      </div>
    </>
  );
}
