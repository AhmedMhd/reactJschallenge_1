import React from 'react';

function Rate(props) {
    return (
        <div className="rate">
                <i className="fas fa-arrow-up"></i>
                {props.num}
        </div>
    );
}

export default Rate;