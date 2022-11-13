import React from 'react';
import p1 from '../../../photos/profilePhoto/team2.jpg'
import p2 from '../../../photos/profilePhoto/team3.jpg'
import p3 from '../../../photos/profilePhoto/testi_03-300x300.jpg'
import bg from '../../../photos/Home/home2-testimonial-bg.jpg'
import './Testimonial.css'
import quoteIcon from '../../../photos/profilePhoto/quote-icon.png'

const Testimonial = () => {
    const data = [
        {
            _id: "01",
            message: "I'vh been happy with teh services provided by Construction LLC. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.",
            img: p1,
            name: "James More",
            designation: "Founder & CEO Zooka Ltd."
        },
        {
            _id: "02",
            message: "I'vh been happy with teh services provided by Construction LLC. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.",
            img: p2,
            name: "James More",
            designation: "Founder & CEO Zooka Ltd."
        },
        {
            _id: "03",
            message: "I'vh been happy with teh services provided by Construction LLC. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.",
            img: p3,
            name: "Kames More",
            designation: "Founder & CEO Zooka Ltd."
        },
    ]
    return (
        <section className='py-5 testimonial' style={{ backgroundImage: `url('${bg}')` }}>
            <div className='container text-white'>
                <h2 className='text-center'>Testimonial</h2>
                <hr></hr>
                <div className='d-flex justify-content-between flex-wrap gap-5'>
                    {data?.map(d => <div>
                        <div>
                            <div className='d-flex align-items-center justify-content-center gap-4 mb-4'>
                                <img width='80' className='rounded-circle' src={d.img} alt=''></img>
                                <div>
                                    <h5 className='mb-0'>{d.name}</h5>
                                    <p className='mb-0' style={{ color: 'gray' }}>{d.designation}</p>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-4 content-testimonial' style={{ color: 'gray' }}>
                                {d.message}
                                <img src={quoteIcon} alt=''></img>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;