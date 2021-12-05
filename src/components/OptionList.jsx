import React from 'react';

function OptionList(props) {
    return (
        <select onChange={(e)=> props.onChange(e.target.value)}>
            {
                props.cats.map((cat,index)=> <option value={cat} key={index}>{cat}</option>)
            }
        </select>
    );
}

export default OptionList;