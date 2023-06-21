"use client";
import { createContext, useReducer } from "react";
import { cartReducer } from "../_components/cart/cartReducer";
import { CartItem, CartAction } from "../_types/types";

export const cartItemsContext = createContext<Array<CartItem> | null>(null);
export const cartItemsDispatchContext =
  createContext<React.Dispatch<CartAction> | null>(null);

export let initialCartItems: Array<CartItem> = [];
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

  return (
    <cartItemsContext.Provider value={cartItems}>
      <cartItemsDispatchContext.Provider value={dispatch}>
        {children}
      </cartItemsDispatchContext.Provider>
    </cartItemsContext.Provider>
  );
}
