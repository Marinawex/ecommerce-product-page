"use client";
import { createContext, useReducer, useContext } from "react";
import { CartItem, Product } from "../_types/types";
import { log } from "console";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
}
export interface CartAction {
  type: CartActionTypes;
  payload: CartItem;
}


export let initialCartItems: Array<CartItem> = [
  //   { id: 0, quantity: 0, product:Product },
];

// export interface CartItem {
//     productId:number;
//     quantity: number;
//     product: Product;
//   }


export const cartItemsContext = createContext<Array<CartItem> | null>(null);
export const cartItemsDispatchContext =
  createContext<React.Dispatch<CartAction> | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

  function handleAddToCart(item: Product) {
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: item,
    });
  }

  function handleRemoveFromCart(item: Product) {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: item,
    });
  }
  function handleIncreaseItemQuantity(item: Product) {
    dispatch({
      type: CartActionTypes.INCREASE_QUANTITY,

      payload: item,
    });
  }

  function handleDecreseItemQuantity(item: Product) {
    dispatch({
      type: CartActionTypes.DECREASE_QUANTITY,

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

export function UseCartItems() {
  return useContext(cartItemsContext);
}
export function UseCartItemsDispatch() {
  return useContext(cartItemsDispatchContext);
}

export function cartReducer(cartItems: Array<CartItem>, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      if (cartItems.find(({ id }) => id === action.payload.id)) {
        return cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...cartItems,
          {
            id: action.payload.id,
            name: action.payload.name,
            quantity: action.payload.quantity,
            price: action.payload.price,
          },
        ];
      }
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
