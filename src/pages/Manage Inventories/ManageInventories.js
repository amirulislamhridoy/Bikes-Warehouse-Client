import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bike")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleDeleteButton = (e) => {
    console.log(e);
    const confirm = window.confirm("Are you sure to DELETE");
    if (confirm) {
      fetch(`http://localhost:5000/bike/${e._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          const remaining = inventories.filter((inv) => inv._id !== e._id);
          setInventories(remaining);
        });
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-end">
        <h1 className="mt-5 pt-5 mb-3">Manage Inventories</h1>
        <Link to="/addNewItem">
          <button className="btn btn-primary mb-3">Add New Item</button>
        </Link>
      </div>

      <table className="table" border="1">
        <thead className="thead-dark">
          <tr>
            <th>S.L</th>
            <th>Bike Name</th>
            <th>Photo</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Supplier Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inv) => (
            <tr key={inv._id}>
              <td>{inventories.indexOf(inv) + 1}</td>
              <td>{inv.name}</td>
              <td>
                <img width="200" src={inv.img} alt="" />
              </td>
              <td>{inv.price}</td>
              <td>{inv.description}</td>
              <td>{inv.quantity}</td>
              <td>{inv.supplierName}</td>
              <td>
                <button
                  onClick={() => handleDeleteButton(inv)}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventories;
