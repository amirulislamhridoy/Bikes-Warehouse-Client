import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
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
        </div>
    );
};

export default Home;