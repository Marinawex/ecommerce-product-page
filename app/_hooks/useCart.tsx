import { useContext } from "react";
import {
  cartItemsContext,
  cartItemsDispatchContext,
} from "../_providers/cartContext";

export function UseCart() {
  const cartItems = useContext(cartItemsContext);
  const dispatch = useContext(cartItemsDispatchContext);

  if (cartItems === null || dispatch === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return { cartItems, dispatch };
}



