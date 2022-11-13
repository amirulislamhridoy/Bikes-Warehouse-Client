import React from 'react';
import bg from '../../../photos/Home/counter_bg.jpg'

const ShortData = () => {
    return (
        <section style={{ backgroundImage: `url('${bg}')` }}>
            <div className='container d-flex justify-content-around text-center py-5 flex-wrap'>
                <div>
                    <h3 className='fs-1'><i class="fa-solid fa-people-line"></i> 500+</h3>
                    <p className='fw-bold fs-5'>People Working</p>
                </div>
                <div>
                    <h3 className='fs-1'><i class="fa-solid fa-screwdriver-wrench"></i> 40+</h3>
                    <p className='fw-bold fs-5'>Years of Experience</p>
                </div>
                <div>
                    <h3 className='fs-1'><i class="fa-solid fa-flag"></i> 20+</h3>
                    <p className='fw-bold fs-5'>Business in County</p>
                </div>
                <div>
                    <h3 className='fs-1'><i class="fa-solid fa-users"></i> 10000+</h3>
                    <p className='fw-bold fs-5'>Happy Clients</p>
                </div>
            </div>
        </section>
    );
};

export default ShortData;