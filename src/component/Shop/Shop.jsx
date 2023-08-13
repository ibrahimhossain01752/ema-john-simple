import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    const handleAddToCart = (product)=>{
       const newCart = [...cart,product];
       setCart(newCart);
    }
    return (
        <div className="shop-container">
           <div className="products-container">
                {
                    products.map(product => <Product
                    key={products.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div> 
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;