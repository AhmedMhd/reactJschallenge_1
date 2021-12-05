import React from 'react';
import Nav from './Nav'
import Product from './Product'
import ProductList from './ProductList'

function Main(props) {
    return (
        <div className="main">
            <Nav  title="6 Suggestions" btnVal='Add feedback'  modalShow={props.modalShow} />
            <Product title="Add tags for solution" desc="Easier to search for solution based on specsif tips" badge="Enhancement" rate={112} coNum={5} />
            <ProductList products={props.products} />
        </div>
    );
}

export default Main;