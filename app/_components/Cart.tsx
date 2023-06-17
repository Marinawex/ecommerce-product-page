"use client";
import {
  UseCartItems,
  UseCartItemsDispatch,
  CartActionTypes,
} from "../_providers/cartContext";

const Cart = () => {
  const cartItems = UseCartItems();
  const dispatch = UseCartItemsDispatch();

  const items = cartItems?.map((item) => {
    return (
      <div id="product" className="flex">
        <div id="image"></div>
        <div id="name">{item.name}</div>
        <div id="">{`${item.price} x ${item.quantity} ${
          item.price * item.quantity
        }`}</div>
        <button
          id="delete-product"
          onClick={() => {
            dispatch!({
              type: CartActionTypes.REMOVE_FROM_CART,
              id: item.id,
              payload: item,
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
