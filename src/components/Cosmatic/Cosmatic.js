import React from 'react';
import './cosmatic.css'

const Cosmatic = (props) => {
    const {name, id}=props.cosmatic;
    return (
        <div className='cosmatic'>
            <h3>{name}</h3>
            <h5>{id}</h5>
        </div>
    );
};

export default Cosmatic;