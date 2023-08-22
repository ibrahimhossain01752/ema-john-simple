import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDb,getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCard = getShoppingCart();
        console.log(storedCard);
    },[])

    const handleAddToCart = (product)=>{
       const newCart = [...cart,product];
       setCart(newCart);
       addToDb(product.id);
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
