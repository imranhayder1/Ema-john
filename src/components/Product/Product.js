import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, handelAddToCart }) => {
    // const { product, handelAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-part'>
                <h3 className='name'>{name}</h3>
                <p className='price'>Price: {price}</p>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='seller'><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;