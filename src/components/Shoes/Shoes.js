import React from 'react';
import { add, result } from '../../utlitis/Calculate';

const Shoes = () => {
    const num1= 3;
    const num2= 4;
    const multiplay= add(num1, num2);
    const Result=  result(num1, num2)
    return (
        <div>
           <h2>Multiple for shoes: {multiplay}   Result for shoes{Result}</h2> 
        </div>
    );
};

export default Shoes;