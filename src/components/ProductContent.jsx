import React from 'react';
import Label from './Label'

function ProductContent(props) {
    return (
        <div className="content" style={{textAlign: 'left', width: '50%'}}>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
                <Label value={props.badge} />
        </div>
    );
}

export default ProductContent;