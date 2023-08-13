import React from 'react';
import './Products.css';

const Product = (props) => {
    const {img,seller,price,ratings,name,quantity} = props.product;
    return (
        <div className="product">
            <img src={img} alt=""></img>
            <div className="product-info">
            <h6 className="products-name">{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacter:{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
            <button className="btn-card">Add to Cart</button>
        </div>
    );
};

export default Product;