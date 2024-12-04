import React, { useState } from "react";
import Products from "./products";
import {allProducts} from '../utils/data'

const Home = ({products, setProducts}) => {
 
  return (
    <div>
      <h1 className="text-5xl text-center my-10 text-white"></h1>
      {products && <Products products={products} setProducts={setProducts} />}
    </div>
  );
};

export default Home;
