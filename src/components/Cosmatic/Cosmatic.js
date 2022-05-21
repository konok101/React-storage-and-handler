import React from 'react';
import './cosmatic.css'

const Cosmatic = (props) => {
    const {name, id}=props.cosmatic;

    const addToCart=(name)=>{
        console.log('added', name)
    }

    const addToCartParam= ()=>addToCart(name);
    return (
        <div className='cosmatic'>
            <h3>{name}</h3>
            <h5>{id}</h5>
            <button onClick={ addToCartParam}>Add to button</button>
        </div>
    );
};

export default Cosmatic;