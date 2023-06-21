

export interface IconProps {
  fillColor?: string;
  strokeColor?: string;
}

export interface ProductImage {
  id: number;
  image: string;
  imageThumbnail: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
}




// Cart types

export interface CartItem {
  productId:number;
  quantity: number;
  product: Product;
}

export interface Payload {
  product: Product;
  quantity?: number;
}

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export interface CartAction {
  type: CartActionTypes;
  payload: Payload;
}