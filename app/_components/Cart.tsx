"use client";
import { useState } from "react";
import { CartProps, Product } from "../_types/types";

const Cart: React.FC<CartProps> = (props) => {
  const { name, price, amount, totalPrice } = props;
  const [products, setProducts] = useState<Array<Product>>();
  return (
    <div className="flex flex-col lg:hidden">
      <div>Cart</div>
      <hr />
      <div>
        <div id="product" className="flex">
          <div id="image"></div>
          <div id="name">{name}</div>
          <div id="">{`${price} x ${amount} ${totalPrice}`}</div>
          <button id="delete-product"></button>
        </div>
        <button className="bg-Orange rounded-md p-2 px-4">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
