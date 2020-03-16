import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';

const Review = () => {
        const [cart, setCart] = useState ([]);

            const removeProduct = (productKey) =>{
                const newCart = cart.filter(pd => pd.key !== productKey);
                setCart(newCart);
                removeFromDatabaseCart(productKey);
            }

       useEffect(() => {
        //cart
        const savedCard = getDatabaseCart();
        const productKey = Object.keys(savedCard);

     const cartProducts =  productKey.map( key => {
         const product = fakeData.find(pd => pd.key === key);
         product.quantity =savedCard[key];
         return product;
     });
        setCart(cartProducts);
    })
    return (
        <div className="twin-container">
          
           <div className="product-container">
           {
                cart.map(pd => <ReviewItems 
                   key={pd.key}
                    RemoveProduct = {removeProduct}
                   
                   product={pd}></ReviewItems>)
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Review;