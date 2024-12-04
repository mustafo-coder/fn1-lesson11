import React, { useState } from "react";

const ProductCard = ({ product, deleteHandler }) => {
  4;
  const [full, setFull] = useState(false);
  const clumpHandler = (text) => {
    if (full) {
      return text;
    } else {
      if (text.length > 150) {
        return text.slice(0, 150) + "...";
      } else {
        return text;
      }
    }
  };
  return (
    <div className="card bg-base-100 w-full border border-slate-700 shadow-xl">
      <figure className="bg-white rounded">
        <img
          className="w-full h-[300px] object-contain"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>
          {clumpHandler(product.description)}
          {product.description.length > 150 && (
            <button onClick={() => setFull(!full)} className="text-red-500">
              {full ? ". Hide" : "Read more"}
            </button>
          )}
        </p>
        <div className="rating rating-md">
          <input
            type="radio"
            defaultChecked
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
            />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="card-actions justify-between">
          <button className="btn btn-error" onClick={() => deleteHandler(product.id)}>Delete</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
