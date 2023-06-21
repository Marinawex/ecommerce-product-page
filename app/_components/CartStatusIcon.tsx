"use client";
import React from "react";
import CartIcon from "./icons/CartIcon";
import { UseCart } from "../_hooks/useCart";

function CartStatusIcon() {
  const { cartItems } = UseCart();
  const itemQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  function displayCart() {

  }


  return (
    <div className=" relative" onClick={displayCart}>
      {cartItems.length > 0 && (
        <div className="bg-Orange rounded-full  px-2 text-xs text-White font-thin">
          {itemQuantity}
        </div>
      )}

      <CartIcon
        fillColor={
          "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer self-center"
        }
      />
    </div>
  );
}

export default CartStatusIcon;
