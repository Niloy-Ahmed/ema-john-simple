import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAdProduct = (product) => {
        const newCard = [...cart, product];
        setCart(newCard);
        const sameProduct = newCard.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                    key = {pd.key}
                    showAddToCart= {true}
                    handleAdProduct = {handleAdProduct}
                         product={pd}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;