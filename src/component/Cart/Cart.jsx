import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  let total = 0;
  let totalShopping = 0;
  for(const  product of cart) {
    total= total+product.price;
    totalShopping = totalShopping+product.shipping;
  }
const tax = total*7/100;
const grandTotal = total + totalShopping + tax;
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
             <h6>Selected Items:{cart.length}</h6>
             <h6>Total Price:${total}</h6>
             <h6>Total Shopping Charge:${totalShopping.toFixed(2)}</h6>
             <h6>Tax:${tax.toFixed(2)}</h6>
             <h6 className='total'>Grand Total:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;