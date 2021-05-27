import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from "./../Shoes.json";

function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h2>404 Not Found</h2>
  return (
    <div className="Productscontainer">
      <h1>Welcome To ProductItem..!!!</h1>
      <div className="link">
        <img src={shoe.img} height={500} alt="Shoe"/>
        {/* <h4>{shoe.name}</h4>
        <h4>{shoe.price}</h4>
        <h3>size:- Availible</h3> */}
      </div>
    </div>
  );
}

export default ProductItem;
