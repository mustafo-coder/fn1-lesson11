import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ setProducts }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (title.trim() != "" && desc.trim() != "") {
      const newProduct = {
        id: uuidv4(),
        title,
        price: 22.3,
        description: desc,
        category: "men's clothing",
        image: `https://picsum.photos/300?random=${uuidv4()}`,
        rating: {
          rate: 4.1,
          count: 259,
        },
      };
      setProducts((prev) => [newProduct, ...prev]);
    }
    setDesc('')
    setTitle('')
  };
  return (
    <form
      onSubmit={formSubmit}
      className="justify-center flex py-10 gap-5 items-center"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Title"
        className="input-bordered input"
      />
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        type="text"
        placeholder="Description"
        className="input-bordered input"
      />
      <button className="btn btn-primary">Create</button>
    </form>
  );
};

export default Create;
