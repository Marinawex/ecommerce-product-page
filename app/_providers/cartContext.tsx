"use client";
import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../_components/cart/cartReducer";
import { CartItem, CartAction } from "../_types/types";

export const cartItemsContext = createContext<Array<CartItem> | null>(null);
export const cartItemsDispatchContext = 
  createContext<React.Dispatch<CartAction> | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [initialCartItems, setInitialCartItems] = useState<Array<CartItem>>([]);
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

  useEffect(() => {
    const initialItems: Array<CartItem> = window.localStorage.getItem("cart-Items")
      ? JSON.parse(localStorage.getItem("cart-Items") || "")
      : [];
    setInitialCartItems(initialItems);
  }, []);

  return (
    <cartItemsContext.Provider value={cartItems}>
      <cartItemsDispatchContext.Provider value={dispatch}>
        {children}
      </cartItemsDispatchContext.Provider>
    </cartItemsContext.Provider>
  );
}