"use client";
import CartIcon from "./icons/CartIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import {
  CartActionTypes,
  UseCartItems,
  UseCartItemsDispatch,
} from "../_providers/cartContext";
import { Product } from "../_types/types";
let nextId = 0
let initialQuantity = 0

const AddtoCart = ({ product }: { product: Product }) => {
  const cartItems = UseCartItems();
  const dispatch = UseCartItemsDispatch();
  
  console.log(product);
  
  return (
    <>
      <div
        id="Amount"
        className="bg-LightGrayishBlue grow-1  lg:px-10 flex justify-evenly items-center p-4 rounded-md lg:space-x-8"
      >
        <div onClick={() => {
           dispatch!({
            type: CartActionTypes.DECREASE_QUANTITY,
            id: product.id,
            payload: {...product, quantity: initialQuantity}
          });
        }}>
          <MinusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
        </div>
        <div className="font-bold">{initialQuantity}</div>
        <div
          onClick={() => {
            dispatch!({
              type: CartActionTypes.INCREASE_QUANTITY,
              id: product.id,
              payload: { ...product, quantity: initialQuantity },
            });
          }}
        >
          <PlusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
        </div>
      </div>

      <button
        className="bg-Orange hover:opacity-75 flex justify-center grow-1 w-full text-White mt-4 lg:mt-0 lg:mr-6 p-4 rounded-md "
        onClick={()=> {
          dispatch!({
            type: CartActionTypes.ADD_TO_CART,
            id: nextId++,
            payload: {...product, quantity:initialQuantity}
          });
        }}
      >
        <CartIcon fillColor={"fill-current text-White mr-4 "} />
        Add to cart
      </button>
    </>
  );
};

export default AddtoCart;
