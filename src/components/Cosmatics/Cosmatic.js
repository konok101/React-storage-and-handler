import React from 'react';
import { add } from '../../utlitis/Calculate';
 

const Cosmatic = () => {

    const first= 33;
    const second= 44;
    const total= add(first, second)

    return (
        <div>
          <h1>Cosmatic part </h1> 
          <h3>Total: {total}</h3>
          <p></p> 
        </div>
    );
};

export default Cosmatic;