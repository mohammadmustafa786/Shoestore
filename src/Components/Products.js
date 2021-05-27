import React from 'react';
import  Shoes  from "./../Shoes.json";
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';

function Products() {
  console.log(Shoes);
return (
    <div  >
      <h3 className="Productscontainer">Welcome To Products..!!!</h3>
    <div className="productcontainer">
      {Object.keys(Shoes).map(keyName =>{
        const shoe = Shoes[keyName];
        return(
        <Link 
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        key={keyName} 
        className="link"
        to={`/product/${keyName}`}> 
        <img src={shoe.img} height={300} width={200}  alt="Shoe" />
        {/* <h4>{shoe.name}</h4> 
        <h4>{shoe.price}</h4>
        <Button variant="contained" color="secondary">
        Add To Cart
      </Button> */}
        </Link>
        )
      })}
    </div>
     
    
    </div>
  );
}

export default Products;
