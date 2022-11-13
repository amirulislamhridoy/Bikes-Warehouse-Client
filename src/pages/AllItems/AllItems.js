import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleInventory from '../Home/SingleInventory/SingleInventory';

const AllItems = () => {
    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://bikes-warehouse-server.herokuapp.com/bike")
            .then((res) => res.json())
            .then((data) => {
                setInventories(data)
                setLoading(false)
            });
    }, []);
    return (
        <div className="container text-center mb-4 inventory" style={{marginTop: '100px'}}>
            <div className={`lds-circle ${!loading && 'd-none'}`}><div></div></div>
            <h1 className="mt-5 mb-3 pb-2 pt-1">Inventory Items</h1>
            <div className="row row-cols-md-2 g-4">
                {inventories.map((inv) => (
                    <SingleInventory inv={inv}></SingleInventory>
                ))}
            </div>
        </div>
    );
};

export default AllItems;