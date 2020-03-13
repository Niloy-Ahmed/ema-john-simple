import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {img, name} = props.product;
    return (
        <div className="product">
            <div>
                <img class="img" src={img} alt=""/>
            </div>
            <div>
            <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Product;