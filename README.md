# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./public/E-commerce%20product%20page%20solution.png)

### Links

- Live Site URL: [https://ecommerce-product-page-marinawex.vercel.app/product](https://ecommerce-product-page-marinawex.vercel.app/product)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Typescript](https://www.typescriptlang.org/) - Static type checking
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

I reinforced my understanding of modern React development using Next.js, React hooks, and the use of TypeScript for better type safety in JavaScript. Implementing the Redux pattern for global state management was also a great learning experience.

I followed [this](https://www.smashingmagazine.com/2021/07/accessible-dialog-from-scratch/) tutorial to build an accessible modal for the cart. It was an excellent resource that provided clear explanations on why each step is crucial for ensuring the modal is fully accessible to all users.

Here is a piece of code I'm proud of, demonstrating the usage of a reducer function in the context API:

```js
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
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        );
      } else {
        return [
          ...cartItems,
          {
            productId: action.payload.product.id,
            quantity: action.payload.quantity,
            product: action.payload.product,
          },
        ];
      }
    }
    //...
  }
}

}
```

### Continued development

I plan to continue focusing on improving my understanding of state management libraries like Redux and MobX, and diving deeper into performance optimization techniques in React. Additionally, I aim to get better at writing comprehensive tests for my components.

### Useful resources

- [Creating An Accessible Dialog From Scratch](https://www.smashingmagazine.com/2021/07/accessible-dialog-from-scratch/)  - This is an amazing tutorial that guided me through the process of building an accessible modal dialog from scratch. This resource was instrumental in helping me understand and implement accessibility standards in a practical way. I'd recommend it to anyone aiming to create more accessible web applications.
- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react) - This is an amazing resource that helped me get comfortable with using TypeScript in React.

## Acknowledgments

I'd like to thank the online developer community for their shared knowledge and inspiration, particularly the contributors to the open source libraries and tools I used in this project.
