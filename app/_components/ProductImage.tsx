"use client";
import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import Modal from "./Modal";
import LightBox from "./LightBox";
import useImageSlider from "../_hooks/useImageSlider";

const ProductImage = () => {
  const {
    images,
    currentImageIndex,
    displayImage,
    SlideImageLeft,
    SlideImageRight,
  } = useImageSlider();

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
          aria-label="Slide image left"
        >
          <LeftArrow
            strokeColor={
              "stroke-current text-Black hover:text-Orange cursor-pointer "
            }
          />
        </button>

        <Modal
          children={<LightBox />}
          openBtnProp={
            <Image
              src={images[currentImageIndex].image}
              width={450}
              height={100}
              alt="Sneakers"
              priority
              className="lg:rounded-xl"
            ></Image>
          }
        />

        <button
          onClick={SlideImageRight}
          className="bg-White rounded-full p-4 border cursor-pointer border-Black absolute top-0 right-0 transform translate-x-6 translate-y-60 lg:hidden"
          aria-label="Slide image right"
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
