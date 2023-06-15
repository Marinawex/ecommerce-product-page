"use client";
import { useState } from "react";
import ProductAmount from "./ProductAmount";
import AddToCartBtn from "./AddToCartBtn";
import Cart from "./Cart";
import { CartProps } from "../_types/types";

const AddtoCart: React.FC<CartProps> = (props) => {
  const { name, price } = props;
  const [amount, setAmount] = useState(0);

  const totalPrice = () => {
    return amount * price;
  };

  return (
    <>
      <Cart
        name={name}
        price={price}
        amount={amount}
        totalPrice={totalPrice()}
        
      />
      <ProductAmount amount={amount} setAmount={setAmount} />
      <AddToCartBtn amount={amount} />
    </>
  );
};

export default AddtoCart;
