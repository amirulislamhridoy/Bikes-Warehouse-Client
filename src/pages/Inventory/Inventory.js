import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Inventory.css'

const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://secure-spire-67449.herokuapp.com/bike")
      .then((res) => res.json())
      .then((data) => {
        setInventories(data)
        setLoading(false)
      });
  }, []);
  return (
    <div className="container text-center mb-4">
      <div className={`lds-circle ${!loading && 'd-none'}`}><div></div></div>
      <h1 className="mt-5 mb-3 pb-2 pt-1">Inventory Items</h1>
      <div className="row row-cols-md-2 g-4 mb-5">
        {inventories.slice(0, 6).map((inv) => (
          <div className="card shadow" key={inv._id}>
            <img src={inv.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{inv.name}</h4>
              <p className="card-text">{inv.description}</p>
              <div className="d-flex justify-content-between">
                <h5>Quantity: {inv.quantity}</h5>
                <h5>Taka: {inv.price}</h5>
                <h5>Supplier: {inv.supplierName}</h5>
              </div>
              <Link to={`/update/${inv._id}`} className="btn btn-primary">
                Stock Update
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/manageInventories">
        <button className="btn btn-primary mb-2 fs-2 ">
        Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
