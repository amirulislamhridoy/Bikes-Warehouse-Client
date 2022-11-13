import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Order.css'

const Order = () => {
    const { id } = useParams();
    const [bike, setBike] = useState({});

    useEffect(() => {
        fetch(`https://bikes-warehouse-server.herokuapp.com/bike/${id}`)
            .then((res) => res.json())
            .then((data) => setBike(data));
    }, [bike]);

    const handleDelivery = (bike) => {
        const quantity = parseInt(bike.quantity) - 1;
        const id = bike._id;
        const data = { quantity, id };
        fetch("https://bikes-warehouse-server.herokuapp.com/bike", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setBike((bike.quantity = quantity));
            });
    };
    const handleFormIncrease = (e) => {
        e.preventDefault();
        // const quantity = parseInt(bike.quantity) + +e.target.number.value;
        // const id = bike._id;
        // const data = { quantity, id };

        // fetch("https://bikes-warehouse-server.herokuapp.com/bike", {
        //     method: "PUT",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setBike((bike.quantity = quantity));
        //         e.target.reset()
        //     });
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
                    <form className="order-form" onSubmit={handleFormIncrease}>
                            <label for="inputName" class="col-form-label">Name<span className='text-danger'>*</span> :</label>
                            <input type="text" id="inputName" class="form-control" aria-describedby="passwordHelpInline" placeholder='Your Name' required />
                            <label for="inputAddress" class="col-form-label">Address<span className='text-danger'>*</span> :</label>
                            <input type="text" id="inputAddress" class="form-control" aria-describedby="passwordHelpInline" placeholder='Address' required />
                            <label for="inputNumber" class="col-form-label">Contact Number<span className='text-danger'>*</span> :</label>
                            <input type="number" id="inputNumber" class="form-control" aria-describedby="passwordHelpInline" placeholder='01555555' required />
                            <button type='submit' className='btn btn-primary'>Add to Card</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;