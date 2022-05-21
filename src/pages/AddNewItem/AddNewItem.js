import React from "react";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/bike", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="" style={{ marginTop: "150px", marginBottom: '50px' }}>
      <form className="w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Bike Name" />
        <br />
        <input type="text" {...register("img")} placeholder="Photo URL" />
        <br />
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <input type="number" {...register("price")} placeholder="Price" />
        <br />
        <input type="number" {...register("quantity")} placeholder="Quantity" />
        <br />
        <input
          type="text"
          {...register("supplierName")}
          placeholder="Supplier Name"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewItem;
