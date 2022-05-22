import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";

const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const my =async () => {
        try{
          const {data} = await axios.get(`https://secure-spire-67449.herokuapp.com/mybike?email=${user.email}`, {
            headers: {
              authorization: localStorage.getItem("accessToken"),
            },
          })
          setBikes(data)
        }
        catch(e){
          // console.log(e)
          signOut(auth)
          navigate('/login')
        }
      }
      my()
    }
  }, [user]);

  const handleDelete = (e) => {
    // 
    const confirm = window.confirm("Are you sure to DELETE");
    if (confirm) {
      fetch(`https://secure-spire-67449.herokuapp.com/bike/${e._id}`, {
        method: 'Delete',
      })
      .then(res => res.json())
      .then(data => {
        const remaining = bikes.filter(bike => bike._id !== e._id)
        setBikes(remaining)
        toast("You are deleted.")
      })
    }
  }

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
              <button onClick={() => handleDelete(bike)} className='btn btn-danger'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
