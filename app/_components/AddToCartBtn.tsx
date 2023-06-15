"use client"
import React from 'react'
import CartIcon from "./icons/CartIcon";

const AddToCartBtn = () => {
  return (
    <button className="bg-Orange hover:opacity-75 flex justify-center grow-1 w-full text-White mt-4 lg:mt-0 lg:mr-6 p-4 rounded-md ">
    <CartIcon fillColor={"fill-current text-White mr-4 "} />
    Add to cart
  </button>
  )
}

export default AddToCartBtn