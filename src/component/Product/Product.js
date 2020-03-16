import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (props) => {
   console.log(props.product.key);
    const {img, name ,seller ,price, stock , key} = props.product;
    return (
        <div className="product">
            <div>
                <img class="img" src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <small>by: {seller}</small>
                 <p>${price}</p>
                 <br/>
                <p><small>Only {stock} left in stock -order in soon.</small></p>
                {props.showAddToCart && <button className="main-button"
                onClick ={() => props.handleAdProduct(props.product)}
                >add to card</button>}
    
            </div>
        </div>
    );
};

export default Product;