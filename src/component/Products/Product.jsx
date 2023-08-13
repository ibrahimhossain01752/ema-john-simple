import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Product = (props) => {
    console.log(props);
    const {img,seller,price,ratings,name,quantity} = props.product;
    const handleAddToCart = props.handleAddToCart;

   
    return (
        <div className="product">
            <img src={img} alt=""></img>
            <div className="product-info">
            <h6 className="products-name">{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacter:{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className="btn-card" >Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;