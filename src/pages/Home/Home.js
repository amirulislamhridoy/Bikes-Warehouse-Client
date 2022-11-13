import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import AboutUs from '../AboutUs/AboutUs'
import OurPartners from './OurPartners/OurPartners';
import ShortData from './ShortData/ShortData';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <ShortData></ShortData>
            <OurPartners></OurPartners>
            {/* <AboutUs /> */}
        </div>
    );
};

export default Home;