import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init'

const AddNewItem = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user.email

    fetch("https://bikes-warehouse-server.herokuapp.com/bike", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success('You are added a new Item');
        reset()
      });
  };
  return (
    <div className="" style={{ marginTop: "150px", marginBottom: '50px' }}>
      <form className=" w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add A New Bike</h2>
        <input className="form-control" type="text" {...register("name")} placeholder="Bike Name" required/>
        <br />
        <input className="form-control" type="text" {...register("img")} placeholder="Photo URL" required/>
        <br />
        <input
         className="form-control"
          type="text"
          {...register("description")}
          placeholder="Description"
          required
        />
        <br />
        <input className="form-control" type="number" {...register("price")} placeholder="Price" required/>
        <br />
        <input className="form-control" type="number" {...register("quantity")} placeholder="Quantity" required/>
        <br />
        <input
         className="form-control"
          type="text"
          {...register("supplierName")}
          placeholder="Supplier Name"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddNewItem;
