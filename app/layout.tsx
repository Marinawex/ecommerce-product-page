import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { CartProvider } from "./_providers/cartContext";

import Header from "./_components/Header";

const Kumbhs = Kumbh_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: {
  children: ReactNode,
  cartModal: ReactNode,
}): {
  
  props: {
  children: ReactNode;
  cartModal: ReactNode;
}
}  {
  
  return (
    <html lang="en">
      <body className={Kumbhs.className}>
        <CartProvider>
          <Header />

          <hr className="hidden lg:flex mt-0 mx-44" />
          <div id="cart-portal"></div>
          {props.cartModal}
          {props.children}
        </CartProvider>
      </body>
    </html>
  );
}
