import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmatics = () => {
    const [Cosmatics, setCosmatics]= useState([])

    useEffect(()=>{

        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data))

    }, [])
    return (
        <div>
            <h1>Welcome to data server</h1>
            {
                Cosmatics.map(cosmatic => <Cosmatic cosmatic={cosmatic}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;