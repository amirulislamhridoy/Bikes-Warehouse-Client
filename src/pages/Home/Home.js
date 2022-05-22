import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <AboutUs />
        </div>
    );
};

export default Home;