import React from 'react';
import { Link } from 'react-router-dom';
import './SingleInventory.css'

const SingleInventory = ({ inv }) => {
    return (
        <div className="card shadow border-0" key={inv._id}>
            <img src={inv.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-end" style={{ color: "#3B008D" }}>{inv.name}</h4>
                <p className="card-text text-start" style={{ fontWeight: '500' }}>{inv.description}</p>
                <div className="d-flex justify-content-between">
                    <h5>Quantity: {inv.quantity}</h5>
                    <h5>Taka: {inv.price}</h5>
                    <h5>Supplier: {inv.supplierName}</h5>
                </div>
                <div className='d-flex justify-content-end gap-1'>
                    <Link to={`/update/${inv._id}`} className="btn btn-primary">
                        Stock Update
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;