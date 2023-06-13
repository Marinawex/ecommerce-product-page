import Image from "next/image";
import avatar from '../public/imges/image-avatar.png'
import cart from '../public/imges/icon-cart.svg'

export default function Home() {
  return (
    <>
      <section id="Header" className="flex flex-row justify-around">
     
        <nav className="flex">
          <ul >
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <img src={cart}></img>

          <Image src={avatar} width={100} height={100} alt="/"></Image>
        </nav>
      </section>

      <main id="Product">
        <Image src={avatar} width={200} height={200} alt="/"></Image>
      </main>

      <h2>Sneaker Company</h2>

      <h1>Fall Limited Edition Sneakers</h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div id="price"> $125.00</div>
      <div id="discount-percentage">50%</div>
      <div id="price-before-discount"> $250.00</div>

      <div id="Cart-Items">0</div>
      <button>Add to cart</button>
    </>
  );
}
