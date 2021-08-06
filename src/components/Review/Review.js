import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import ReviewCardItem from "../ReviewCardItem/ReviewCardItem";
import './Review.css'
const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const restoreCartData = getDatabaseCart();
    console.log(restoreCartData);
    const productKeys = Object.keys(restoreCartData);
    console.log(productKeys);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((productItem) => productItem.key === key);
      product.quantity = restoreCartData[key];
      return product;
    });

    console.log(cartProducts);
    setCart(cartProducts);
  },
  
  
  []);

  return (
    <div className="review__container">
        <div className="selected__product__container">
        {/* <h1>This is Review</h1> */}
        {/* <h2>Cart Items:{cart.length}</h2> */}
        {cart.map((productItem)=><ReviewItem  productId={productItem} ></ReviewItem>)}

        </div>
    <div>
        <ReviewCardItem/>
    </div>
    </div>  

  );
};

export default Review;
