import React, { useEffect } from "react";

const products = [
  {
    _id: "1",
    title: "Nike Shoes",
    src: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/300bd51f-3ce1-473c-95d2-f8053a327a7d/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2159ba1-3625-4604-ac79-64355a8b67b0/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c76b49a-1e27-46d4-99ca-7a99a0306113/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccae9e3e-2f66-45db-9384-3a26815b6815/zion-2-basketball-shoes-XjhskN.png",
    ],
    description: "UI/UX designing, html css tutorials",
    content:
      "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    price: 23,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
  },
];

const ProductView = () => {
  useEffect(() => {});
  return <div>ProductView</div>;
};

export default ProductView;
