import React, {useState} from 'react';
import FeedbackForm from './FeedbackForm';
import Main from './Main'
import Sidebar from './Sidebar'


function FeedbackPage(props) {
    const [open, setOpne] = useState(false)
    const [products, setProducts] = useState([])
    const cats = ['UI','UX','Enhancement','Bug','Development','Production']

    return (
        <div className="feedback-board">
            <Sidebar cats={cats} />
            <Main products={products}  modalShow={setOpne} />
            <FeedbackForm cats={cats} modalShow={setOpne} open={open} products={products} setProducts={setProducts} />
        </div>

    );
}

export default FeedbackPage;