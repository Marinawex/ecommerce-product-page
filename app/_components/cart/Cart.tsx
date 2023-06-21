"use client";
import { UseCart } from "../../_hooks/useCart";
import { CartActionTypes } from "../../_types/types";

const Cart = () => {
  const { cartItems, dispatch } = UseCart();

  const items = cartItems?.map((item) => {
    return (
      <div id="product" className="flex" key={item.productId}>
        <div id="image"></div>
        <div id="name">{item.product.name}</div>
        <div id="">{`${item.product.price} x ${item.quantity} ${
          item.product.price * item.quantity
        }`}</div>
        <button
          id="delete-product"
          onClick={() => {
            dispatch!({
              type: CartActionTypes.REMOVE_FROM_CART,
              payload: { product: item.product },
            });
          }}
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="flex flex-col py-10 m-10">
      <div>Cart</div>
      <hr />
      <div>
        {items}
        <button className="bg-Orange rounded-md p-2 px-4">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
