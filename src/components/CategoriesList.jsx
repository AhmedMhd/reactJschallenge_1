import React from 'react';
import Label from './Label'

function CategoriesList(props) {
    return (
            <div className="categories">
                {
                    props.cats.map((cat,index)=>  <Label value={cat} />)
                }
            </div>
    );
}

export default CategoriesList;