import React from 'react';

const Cosmatic = (props) => {
    const {name, id}=props.cosmatic;
    return (
        <div>
            <h3>{name}</h3>
            <h1>{id}</h1>
        </div>
    );
};

export default Cosmatic;