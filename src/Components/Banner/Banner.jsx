import React from 'react';

const Banner = () => {
    return (
        <div className='bg-cover bg-no-repeat rounded-3xl md:w-full  h-full md:h-[35.5rem] mb-10' style={{
            backgroundImage:'url(https://i.ibb.co.com/7rrk2rc/hero-bg.png)'
        }}>
            <div className='w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-5 py-4'>
                <h1 className='font-bold text-white md:text-[3.25rem]'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-lg text-white font-normal'>
                    Whether you are a beginner or a seasoned chef, our expert-led sessions offer personalized quidance and inspriation. Join us for an enriching culinary expreience that is sure to ignite your passion fot food and cooking.
                </p>
                <div className='flex gap-4 text-xl font-semibold'>
                    <button className='btn bg-green-400 text-white rounded-full border-none'>Explore Now</button>
                    <button className='btn btn-outline text-white hover:bg-green-400 rounded-full'>Our Feedback</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;