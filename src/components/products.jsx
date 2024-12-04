import React from "react";
import ProductCard from "./product-card";

const Products = ({ products, setProducts }) => {
  const deleteHandler = (id) => {
    const prd = products.filter((p) => p.id != id);
    setProducts(prd);
  };
  return (
    <div className="grid grid-cols-4 gap-5 justify-center">
      {products.map((p) => (
        <ProductCard deleteHandler={deleteHandler} key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;

// ! CRUD. Title description id uuid bolsin. forma bolsin. ko'rish, o'chirish, yangilash va yaratish bo'lsin
