import { CartItem, CartAction, CartActionTypes } from "../../_types/types";

export function cartReducer(
  cartItems: Array<CartItem>,
  action: CartAction
): Array<CartItem> {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      if (
        cartItems.find(
          ({ productId }) => productId === action.payload.product.id
        )
      ) {
        return cartItems.map((item) =>
          item.productId === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity! }
            : item
        );
      } else {
        if (action.payload.quantity! > 0) {
          return [
            ...cartItems,
            {
              productId: action.payload.product.id,
              quantity: action.payload.quantity || 1,
              product: action.payload.product,
            },
          ];
        } else {
          return cartItems;
        }
      }
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      return cartItems.filter(
        (item) => item.productId !== action.payload.product.id
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
