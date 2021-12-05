import React, {useState} from 'react';
import Button from './Button';
import Input from './Input';
import OptionList from './OptionList';

function FeedbackForm(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState(props.cats[0])

    const submit = (e)=> {
        e.preventDefault();
        if(!title || !desc || !cat) {
            console.log('error')
            return
        }

        let Prods = Array.from(props.products)
        let product = {'title': title, 'desc' : desc, 'badge': cat}
        Prods.push(product)
        props.setProducts(Prods)

        
    }
    return (
        <div className="overlay" style={{display: `${props.open ? 'block' : 'none'}`}} >
            <form onSubmit={submit}>
                    <Input label="Title" placeholder="Product Title" type="text" value={title} onChange={setTitle} />
                    <Input label="Description" placeholder="Product Description" type="text" value={desc} onChange={setDesc} />
                    <OptionList cats={props.cats} onChange={setCat} />
                    <Button value='Add feedback' />
                    <span style={{cursor: 'pointer'}} onClick={(e)=> props.modalShow(false)}>X</span>
            </form>
        </div>
    );
}

export default FeedbackForm;