import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase_init";

const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/mybike?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }
  }, [user]);
  return (
    <div className="container mt-5 pt-5 mb-5">
    <div className="row row-cols-3 g-2">
      {bikes.map((bike) => (
        <div className="card shadow py-4 px-3" key={bike._id}>
          <img src={bike.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{bike.name}</h4>
            <p className="card-text">{bike.description}</p>
            <div className="d-flex justify-content-between">
              <h5>Quantity: {bike.quantity}</h5>
              <h5>Taka: {bike.price}</h5>
              <h5>Supplier: {bike.supplierName}</h5>
            </div>
            {/* <Link to={`/update/${bike._id}`} className="btn btn-primary">
              Stock Update
            </Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyItem;
