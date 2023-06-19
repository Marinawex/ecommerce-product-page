

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
  quantity:number // delete!
  images: ProductImage[];
}

export interface AddtoCartProps {
  amount?: number;
  setAmount?: any;
}


export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

// export interface CartItem {
//   productId:number;
//   quantity: number;
//   product: Product;
// }