import React from 'react';
import quoteIcon from '../../photos/profilePhoto/quote-icon.png'

const Contact = () => {
    return (
        <section className='container' style={{ marginTop: '100px' }}>
            <div className='d-md-flex gap-5'>
                <div>
                    <h2 className=''>
                        <img className='me-2' style={{ width: '20px', marginTop: '-10px' }} src={quoteIcon} alt=''></img>
                        Contact Us
                    </h2>
                    <p className='d-flex align-items-baseline gap-3'>
                        <i class="fa-solid fa-location-dot fs-4" style={{ position: 'relative', bottom: '-5px' }}></i>
                        <span>
                            14 Mohakjali
                            <br />
                            Dhaka, Bangladesh
                        </span>
                    </p>
                    <p className='d-flex align-items-baseline gap-3'>
                        <i class="fa-solid fa-phone-flip fs-5"></i>
                        <span>0124564655</span>
                    </p>
                    <p className='d-flex align-items-baseline gap-3'>
                        <i class="fa-solid fa-envelope fs-5"></i>
                        <span>abc@gmail.com</span>
                    </p>
                </div>
                <div className='w-75'>
                    <h2>
                        <img className='me-2' style={{ width: '20px', marginTop: '-10px' }} src={quoteIcon} alt=''></img>
                        Fill Contact Form
                    </h2>
                    <form className='w-100'>
                        <div className='d-flex gap-2 mb-2'>
                            <input type='text' className='form-control' placeholder='Your name here' required></input>
                            <input type='text' className='form-control' placeholder='Subject' required></input>
                        </div>
                        <div className='d-flex gap-2 mb-2'>
                            <input type='email' className='form-control' placeholder='Your email' required></input>
                            <input type='text' className='form-control' placeholder='Phone' required></input>
                        </div>
                        <textarea type='text' className='form-control' style={{ height: '100px' }} placeholder='Your message' required></textarea>
                        <input type='submit' className='btn btn-primary mt-2 mb-4 px-5' value='SEND MESSAGE'></input>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;