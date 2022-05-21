import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [inventories, setInventories] =useState([])
    useEffect( () => {
        fetch('inventory.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return (
        <div className="container text-center">
            {inventories.slice(0,6).map(inv => <img width='200' height="200" src={inv.img} alt=""  ></img>)}
        </div>
    );
};

export default Inventory;