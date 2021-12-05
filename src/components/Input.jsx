import React from 'react';

function Input(props) {
    return (
        <div className="form-group" >
            <label for>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e)=> props.onChange(e.target.value)} />
        </div>
    );
}

export default Input;