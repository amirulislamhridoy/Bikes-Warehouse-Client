import React from "react";
import bike from '../../photos/bikes/vander-films-YQRSn9fvrUk-unsplash.jpg'

const AboutUs = () => {
  return (
    <section className="" style={{marginTop: '90px'}}>
      <div style={{ backgroundColor: '#3A7EEE' }}><div className='container'><h2 className=' m-0 pt-4 text-white'>About Us</h2></div></div>
      <div className="" style={{ backgroundImage: "linear-gradient(#3A7EEE,#CDDFFA)" }}>
        <div className='container d-flex gap-5 align-items-center pb-3' >
          <div className=''>
            <h2 className='text-white'>Enhancing Human Potential</h2>
            <p className='text-white' style={{fontWeight:" 500"}}>
              We can communication by bike. It will be very easy for every man. For we should use bike. Our bike engine is Japani, American, British etc engine. It's import from Japan, America, London etc. It is very strong engine. It driving is very comfortable. We have racing bike and normal bike. But this bike is login lasting. I assure you this bike will be good bike than other bike.
            </p>
          </div>
          <img width='400' className='rounded-circle' src={bike} alt=''></img>
        </div>
      </div>
      <div className='container py-5'>
        <h2>Our Story</h2>
        <div>
          Fast of all we are start our business at 2000 in Gazipur. Our business is running now. Now, it is in top 10 business in Bangladesh. Most of the people like our items. Because it is very good. And we are import from abroad live. We want to do this business in full world.
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
