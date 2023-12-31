import { Product } from "../_types/types";
import AddtoCart from "../_components/cart/AddtoCart";
import ProductImage from "../_components/ProductImage";
import productItem from "../_data/product.json";

export default function Product() {
  const product: Product = productItem;

  return (
    <main id="Product" className="lg:flex lg:mx-44 lg:p-10 ">
      <ProductImage />

      <div className="p-6 lg:p-10 lg:m-10 lg:pr-36 lg:space-y-6 space-y-4">
        <h2 className="text-Orange text-lg ">Sneaker Company</h2>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-DarkGrayishBlue lg:py-8">{product.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div id="price" className="font-bold text-3xl">
              {" "}
              ${product.price}
            </div>
            <div
              id="discount-percentage"
              className="text-Orange bg-PaleOrange px-2 rounded-md self-center"
            >
              50%
            </div>
          </div>
          <div
            id="price-before-discount"
            className="text-DarkGrayishBlue line-through"
          >
            {" "}
            $250.00
          </div>
        </div>

        <div className="lg:flex lg:space-x-10">
          <AddtoCart product={product} />
        </div>
      </div>
    </main>
  );
}
