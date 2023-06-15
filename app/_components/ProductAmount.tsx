"use client";
import React from "react";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

const ProductAmount = () => {
  return (
    <div
      id="Amount"
      className="bg-LightGrayishBlue grow-1  lg:px-10 flex justify-evenly items-center p-4 rounded-md lg:space-x-8"
    >
      <MinusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
      <div className="font-bold">0</div>
      <PlusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
    </div>
  );
};

export default ProductAmount;
