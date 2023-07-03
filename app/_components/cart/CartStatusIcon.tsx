"use client";
import CartIcon from "../icons/CartIcon";
import { UseCart } from "../../_hooks/useCart";
import Cart from "./Cart";
import CartModal from "./CartModal";
import { CartItem, Product } from "@/app/_types/types";

function CartStatusIcon(): React.ReactElement {
  const { cartItems } = UseCart();
  const cartItemsQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <div className="relative self-center inline-block">
      {cartItems.length > 0 && (
        <div className="bg-Orange rounded-full px-2 text-xs text-White font-thin absolute -top-2 -right-2">
          {cartItemsQuantity}
        </div>
      )}
      <CartModal
        children={<Cart />}
        triggerElement={
          <CartIcon
            fillColor={
              "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer"
            }
          />
        }
      />
    </div>
  );
}

export default CartStatusIcon;
