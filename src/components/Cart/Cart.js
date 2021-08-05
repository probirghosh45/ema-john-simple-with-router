import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart =props.cart
   
    const total = cart.reduce((total,productPrice)=>total+productPrice.price,0);

    let shipping=0;
    if(total>=30){
        shipping=0;
    }
    else if(total>=10){
        shipping=4.99;
    }
    else if(total>0){
        shipping=14.99;
    }
   
    let totalPriceWithoutTax=total.toFixed(2)+shipping.toFixed(2)
    let tax=(total+shipping)/10;

    let grandTotal=(total+shipping+tax).toFixed(2); //round figure niye tarpor "toFixed korte hobe nahole ulta palta result dekhabe"

    return (
        <div>
            <h1>Order Summary</h1>
            <small>Items Ordered:{cart.length}</small> <br />
            <small>Items neat Price:{total.toFixed(2)}</small><br />  {/* toFixed(2) mane dosomiker pore 2 ghor  */}
            <small>Shipping & Handling : {shipping.toFixed(2)}</small><br />
            <small>Total before Tax: {totalPriceWithoutTax}</small><br />
            <small>Estimated Tax: {tax.toFixed(2)}</small><br />
            <h3>Order Total : {grandTotal}</h3>
       
        </div>
    );
};

export default Cart;