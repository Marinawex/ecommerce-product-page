"use client"
import { useState, useEffect } from "react";
import product from "../_data/product.json";
import { ProductImage } from "../_types/types";

function useImageSlider() {
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

  return {
    images,
    currentImageIndex,
    displayImage, 
    SlideImageLeft,
    SlideImageRight
}
}

export default useImageSlider