"use client";
import Image from "next/image";
import { UseCart } from "../../_hooks/useCart";
import { CartActionTypes } from "../../_types/types";
import DeleteIcon from "../icons/DeleteIcon";

const Cart = () => {
 
  const { cartItems, dispatch } = UseCart();

  const items = cartItems?.map((item) => {
    return (
      <div
        id="product"
        className="flex justify-between gap-2 text-DarkGrayishBlue"
        key={item.productId}
      >
        <Image
          className="rounded-md"
          src={item.product.images[0].image}
          width={50}
          height={50}
          priority
          alt="product image"
        />
        <div>
          {" "}
          <div id="name">{item.product.name}</div>
          <div id="">{`$${item.product.price} x ${item.quantity} $${
            item.product.price * item.quantity
          }`}</div>
        </div>

        <button
          id="delete-product"
          className="pl-2"
          onClick={() => {
            dispatch!({
              type: CartActionTypes.REMOVE_FROM_CART,
              payload: { product: item.product },
            });
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    );
  });

  return (
    <div className="flex flex-col  ">
      <div className="p-2">Cart</div>
      <hr />
      {cartItems.length > 0 ?  <div className="flex flex-col justify-center p-8 space-y-4">
        {items}
        <button className="bg-Orange rounded-md p-2 px-4">Checkout</button>
      </div> : <p className="p-10 m-10">Your Cart is empty.</p>}
     
    </div>
  );
};

export default Cart;
