import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/bike/${id}`)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, [bike]);

  const handleDelivery = (bike) => {
    const quantity = parseInt(bike.quantity) - 1;
    const id = bike._id
    const data = {quantity, id}

    fetch("http://localhost:5000/bike", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => { 
        setBike(bike.quantity = quantity)
        console.log(json)
        console.log(bike)
      });
  };
  return (
    <div className="container">
      <div className="card border-0" key={bike._id}>
        <img src={bike.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{bike.name}</h4>
          <p className="card-text">{bike.description}</p>
          <h5>Quantity: {bike.quantity}</h5>
          <h5>Taka: {bike.price}</h5>
          <h5>Supplier: {bike.supplierName}</h5>
          <button
            onClick={() => handleDelivery(bike)}
            className="btn btn-primary"
          >
            Delivery
          </button>
          {/* <Link to={`/update/${bike._id}`} className="btn btn-primary">
            Stock Update
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Update;
