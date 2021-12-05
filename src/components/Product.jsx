import React from 'react';
import Rate from './Rate'
import ProductContent from './ProductContent'

function Product(props) {
    return (
        <div className="product">
            <Rate num={props.rate} />
            <ProductContent title={props.title} desc={props.desc} badge={props.badge} />
            <div className="comments">
                 <i className="fas fa-comments"></i>&nbsp;&nbsp;{props.coNum}
            </div>

    </div>
    );
}

export default Product;