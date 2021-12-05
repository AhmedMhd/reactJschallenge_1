import React from 'react';

function Button(props) {
    let show 
    if(!props.modalShow) {
        show = null
    }
    else {
       show = props.modalShow
    }
    return <button onClick={show}>{props.value}</button>
}

export default Button;