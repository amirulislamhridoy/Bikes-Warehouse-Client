import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import AboutUs from '../AboutUs/AboutUs'
import OurPartners from './OurPartners/OurPartners';
import ShortData from './ShortData/ShortData';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <ShortData></ShortData>
            <Testimonial></Testimonial>
            <OurPartners></OurPartners>
            {/* <AboutUs /> */}
        </div>
    );
};

export default Home;