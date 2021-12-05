import React from 'react';
import Product from './Product'

function ProductList(props) {
    return (
        <>
        
        {
             props.products.map((product,index)=> <Product title={product.title} desc={product.desc} badge={product.badge} rate={parseInt(Math.random()*1000)} coNum={parseInt(Math.random()*1000)} key={index} />)
        }
         
        
        </>
    );
}

export default ProductList;