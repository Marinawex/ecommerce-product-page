"use client";
import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import { ProductImage } from "../_types/types";
import product from "../_data/product.json";
import { useState } from "react";

const ProductImage = () => {
  const images: ProductImage[] = product.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const Thumbnailimages = images.map((image, index) => {
    const currentThumbnail =
      currentImageIndex == index ? " border-2 border-Orange opacity-50" : null;
    return (
      <Image
        key={image.id}
        src={image.imageThumbnail}
        width={200}
        height={200}
        alt="Sneakers"
        className={`hidden lg:flex rounded-md m-4 cursor-pointer hover:opacity-50 ${currentThumbnail}`}
        onClick={() => displayImage(index)}
      ></Image>
    );
  });

  return (
    <div id="light-box flex flex-row ">
      <div className="bg-White rounded-full p-4 border cursor-pointer border-Black absolute top-0 left-0 transform translate-y-60 lg:hidden">
        <LeftArrow
          strokeColor={
            "stroke-current text-Black hover:text-Orange cursor-pointer "
          }
        />
      </div>

      <Image
        src={images[currentImageIndex].image}
        width={500}
        height={500}
        alt="Sneakers"
        priority
        className="lg:rounded-xl"
      ></Image>

      <div className="bg-White rounded-full p-4 border cursor-pointer border-Black absolute top-0 right-0 transform  translate-y-60 lg:hidden">
        <RightArrow
          strokeColor={
            "stroke-current text-Black hover:text-Orange cursor-pointer  "
          }
        />
      </div>
      <div className="flex justify-around">{Thumbnailimages}</div>
    </div>
  );
};

export default ProductImage;
