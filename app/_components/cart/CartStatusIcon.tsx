"use client";
import CartIcon from "../icons/CartIcon";
import { UseCart } from "../../_hooks/useCart";
import Cart from "./Cart";
import CartModal from "./CartModal";

function CartStatusIcon() {
  const { cartItems } = UseCart();
  const cartItemsQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <div className=" self-center">
      {cartItems.length > 0 && (
        <div className="bg-Orange rounded-full  px-2 text-xs text-White font-thin">
          {cartItemsQuantity}
        </div>
      )}
      <CartModal
        children={<Cart /> || null}
        openBtnProp={
          <CartIcon
            fillColor={
              "fill-current text-DarkGrayishBlue hover:text-Black cursor-pointer "
            }
          />
        }
      />
    </div>
  );
}

export default CartStatusIcon;
