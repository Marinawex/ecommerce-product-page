import product1 from "../../public/imges/image-product-1.jpg";
import product1Thumbnail from "../../public/imges/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../../public/imges/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../../public/imges/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../../public/imges/image-product-4-thumbnail.jpg";
import product2 from "../../public/imges/image-product-2.jpg";
import product3 from "../../public/imges/image-product-2.jpg";
import product4 from "../../public/imges/image-product-4.jpg";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";


import Image from "next/image";
import { Product } from "../_types/types";
import ProductAmount from "./ProductAmount";
import AddToCartBtn from "./AddToCartBtn";

const Product = () => {
  const product: Product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 125.0,
    images: [
      { id: 1, image: product1, imageThumbnail: product1Thumbnail },
      { id: 2, image: product2, imageThumbnail: product2Thumbnail },
      { id: 3, image: product3, imageThumbnail: product3Thumbnail },
      { id: 4, image: product4, imageThumbnail: product4Thumbnail },
    ],
  };
  return (
    <main id="Product" className="lg:flex lg:mx-44 lg:p-10 ">
      <div id="light-box flex flex-row">
        <LeftArrow
          strokeColor={
            "stroke-current text-Black hover:text-Orange cursor-pointer "
          }
        />
        <Image
          src={product.images[0].image}
          alt=" /"
          className="lg:rounded-xl"
        ></Image>
        <Image
          src={product.images[1].image}
          height={300}
          alt="/"
          className="hidden"
        ></Image>
        <Image
          src={product.images[2].image}
          height={300}
          alt="/"
          className="hidden"
        ></Image>
        <Image
          src={product.images[3].image}
          height={300}
          alt="/"
          className="hidden"
        ></Image>
        <RightArrow
          strokeColor={
            "stroke-current text-Black hover:text-Orange cursor-pointer"
          }
        />
      </div>

      <div className="p-6 lg:p-10 lg:m-10 lg:pr-36 lg:space-y-6 space-y-4">
        <h2 className="text-Orange text-lg ">Sneaker Company</h2>

        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="text-DarkGrayishBlue lg:py-8">{product.description}</p>
        <div className="flex justify-between lg:justify-start lg:space-x-4">
          <div id="price" className="font-bold text-3xl">
            {" "}
            ${product.price}
          </div>
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
          <ProductAmount/>
          <AddToCartBtn/>
        
        </div>
      </div>
    </main>
  );
};

export default Product;
