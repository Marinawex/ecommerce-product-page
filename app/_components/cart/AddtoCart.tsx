"use client";
import CartIcon from "../icons/CartIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import { Product, CartActionTypes } from "../../_types/types";
import { useState, useEffect } from "react";
import { UseCart } from "../../_hooks/useCart";


const AddtoCart = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems,dispatch } = UseCart();

  function handleDecreseItemQuantity() {
    if (!quantity) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    localStorage.setItem('cart-Items', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <>
      <div
        id="Amount"
        className="bg-LightGrayishBlue grow-1  lg:px-10 flex justify-evenly items-center p-4 rounded-md lg:space-x-8"
      >
        <button onClick={handleDecreseItemQuantity}>
          <MinusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
        </button>
        <div className="font-bold">{quantity}</div>
        <button onClick={() => setQuantity(quantity + 1)}>
          <PlusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
        </button>
      </div>

      <button
        className="bg-Orange hover:opacity-75 flex justify-center grow-1 w-full text-White mt-4 lg:mt-0 lg:mr-6 p-4 rounded-md "
        onClick={() => {
          dispatch!({
            type: CartActionTypes.ADD_TO_CART,
            payload: { product, quantity },
          });
        }}
      >
        <CartIcon fillColor={"fill-current text-White mr-4 "} />
        Add to cart
      </button>
    </>
  );
};

export default AddtoCart;
