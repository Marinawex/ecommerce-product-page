"use client";
import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import { ProductImage } from "../_types/types";
import product from "../_data/product.json";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import LightBox from "./LightBox";

const ProductImage = () => {
  const images: ProductImage[] = product.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const SlideImageLeft = () => {
    const lastIndex = images.length - 1;
    if (!currentImageIndex) {
      setCurrentImageIndex(lastIndex);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const SlideImageRight = () => {
    const lastIndex = images.length - 1;
    if (currentImageIndex == lastIndex) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "ArrowRight") {
        SlideImageRight();
      } else if (e.key === "ArrowLeft") {
        SlideImageLeft();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex]);

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
    <>
      <div id="light-box flex flex-row ">
        <button
          onClick={SlideImageLeft}
          className="bg-White rounded-full p-4 border cursor-pointer border-Black absolute top-0 left-0 transform translate-y-60 lg:hidden"
        >
          <LeftArrow
            strokeColor={
              "stroke-current text-Black hover:text-Orange cursor-pointer "
            }
          />
        </button>

        <Image
          src={images[currentImageIndex].image}
          width={500}
          height={500}
          alt="Sneakers"
          priority
          className="lg:rounded-xl"
        ></Image>
        <div className="hidden lg:flex">
          <Modal>{<LightBox />}</Modal>
        </div>

        <button
          onClick={SlideImageRight}
          className="bg-White rounded-full p-4 border cursor-pointer border-Black absolute top-0 right-0 transform translate-x-6 translate-y-60 lg:hidden"
        >
          <RightArrow
            strokeColor={
              "stroke-current text-Black hover:text-Orange cursor-pointer  "
            }
          />
        </button>
        <div className="flex justify-around">{Thumbnailimages}</div>
      </div>
    </>
  );
};

export default ProductImage;
