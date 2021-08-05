import React, { useState } from "react";
import fakeData from "../../fakeData";
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

  }

  return (
    <div className="shopping">
        <div className="product__container">
            {/* <h1>This is Shop</h1> */}
            <ul>
            {/* {products.length} */}
            {/* {products.map((productItem)=><li>{productItem.name}</li>)} */}
            {products.map((productItem) => (
                <Product handleClicked={handleClick} product={productItem}></Product>
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
