import React from 'react';
import Button from './Button';

function Nav(props) {
    return (
        <nav>
               <div className="left">
                <span className="logo" style={{marginRight: 10}}>logo</span>
                <p className="title">{props.title}</p>
                <p className="sort"><span>Sort by : </span>&nbsp;Most Upvotes&nbsp;<i className="fas fa-arrow-down"></i></p>
               </div>
                <Button value={props.btnVal}  modalShow={props.modalShow} />

        </nav>
    );
}

export default Nav;