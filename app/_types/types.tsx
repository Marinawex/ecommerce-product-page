import { StaticImageData } from "next/image";

export interface IconProps {
  fillColor?: string;
  strokeColor?: string;
}

export interface Image {
  id: number;
  image: StaticImageData;
  imageThumbnail: StaticImageData;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: Image[];
}

export interface AddtoCartProps {
  amount?: number;
  setAmount?: any;
}
export interface CartProps {
  name: string;
  price: number;
  amount?: number;
  totalPrice?: number;
}
