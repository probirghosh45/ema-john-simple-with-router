import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';
const Shop = () => {
  const product10 = fakeData.slice(0, 10);
  //  console.log(product10)
  const [products, setProducts] = useState(product10);
  const [cart, setCart] = useState([]) //blank array rekhlam karon initial stage a cart 0 product thakleo add product korla new new product array akare store hobe  

  const handleClick = (product)=>{
      console.log('Button Clicked',product);
      const updatedCart=[...cart,product]
      setCart(updatedCart);

      const sameProduct=updatedCart.filter((productItem)=>(productItem.key===product.key ));
     const count = sameProduct.length;
      addToDatabaseCart(product.key,count) //localStorage a data Store korteci 
    //"addtoDatabaseCart" diye database a data add korlam tarpor 
    // "getDatabaseCart" diye database theke data restore korbo
    //addtoDatabaseCart => fakeData theke load hocce
     //1st a filter kore cross match korlam jate ki ki match product ache miliye nilam..
     //2nd array ar length jene nilam
     //tarpor count namme a pass kore dilam

  }

  return (
    <div className="shopping">
        <div className="product__container">
            {/* <h1>This is Shop</h1> */}
            <ul>
            {/* {products.length} */}
            {/* {products.map((productItem)=><li>{productItem.name}</li>)} */}
            {products.map((productItem) => (
                <Product key={productItem.key} showAddToCartButton={true} handleClicked={handleClick} product={productItem}></Product>
            ))}

            {/*Data Passing with Props, ekhane "product" [small p] namme parameter[params] "productItem" k pathalam "product page a "props" [props=properties] akare receive korbo"*/}

            {/* {products.map((productName)=>(productName.name))} */}
            {/* {products.map((productPrice)=>(productPrice.price))} */}
            </ul>
        </div>
        <div>
            <Cart cart={cart}></Cart>
        </div>
    </div>
  );
};

export default Shop;
