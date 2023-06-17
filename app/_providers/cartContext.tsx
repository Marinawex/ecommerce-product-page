"use client";
import { createContext, useReducer, useContext } from "react";
import { CartItem } from "../_types/types";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
}
export interface CartAction {
  type: CartActionTypes;
  id: number;
  payload: CartItem;
}


let nextId = 0
export let initialCartItems: Array<CartItem> = [
//   { id: 0, name: "", quantity: 0, price: 0 },
];




export const cartItemsContext = createContext<Array<CartItem>| null>(null);
export const cartItemsDispatchContext =createContext<React.Dispatch<CartAction>| null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

  function handleAddToCart(item: CartItem) {
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      id: nextId++,
      payload: item,
    });
  }

  function handleRemoveFromCart(item: CartItem) {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      id: item.id,
      payload: item,
    });
  }
    function handleIncreaseItemQuantity(item: CartItem) {
      dispatch({
        type: CartActionTypes.INCREASE_QUANTITY,
        id: item.id,
        payload: item,
      });
    }

    function handleDecreseItemQuantity(item: CartItem) {
      dispatch({
        type: CartActionTypes.DECREASE_QUANTITY,
        id: item.id,
        payload: item,
      });
    }
  

  return (
    <cartItemsContext.Provider value={cartItems}>
      <cartItemsDispatchContext.Provider value={dispatch}>
        {children}
      </cartItemsDispatchContext.Provider>
    </cartItemsContext.Provider>
  );
}

export function UseCartItems () {
    return useContext(cartItemsContext);
}
export function UseCartItemsDispatch () {
    return useContext(cartItemsDispatchContext);
}

export function cartReducer(cartItems: Array<CartItem>, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      return [
        ...cartItems,
        {
          id: action.id,
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price,
        },
      ];
    }
    case CartActionTypes.INCREASE_QUANTITY: {
      return cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case CartActionTypes.DECREASE_QUANTITY: {
      let newCartItems = cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (!item.quantity) return { ...item, quantity: 0 };
          else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      });
      return newCartItems;
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return cartItems.filter((item) => item.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

