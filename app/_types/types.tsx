

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
