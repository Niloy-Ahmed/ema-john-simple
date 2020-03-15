import React from 'react';
import './Product.css'

const Product = (props) => {
   // console.log(props.product);
    const {img, name ,seller ,price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img class="img" src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <small>by: {seller}</small>
                 <p>${price}</p>
                 <br/>
                <p><small>Only {stock} left in stock -order in soon.</small></p>
                <button className="mainBtn"
                onClick ={() => props.handleAdProduct(props.product)}
                >add to card</button>
    
            </div>
        </div>
    );
};

export default Product;