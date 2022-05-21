import React from 'react';
import { add } from '../../utlitis/Calculate';

const Fish = () => {
    const num1= 21;
    const num2= 33;
    const adds= add(num1, num2);
    return (
        <div>
            <h1>Fish add {adds}</h1>
        </div>
    );
};

export default Fish;