import React from 'react';
import './Abouth.css'
import anik from '../../images/anik.jpg'

const Abouth = () => {
    return (
        <div className='shadow-sm text-center p-3 mb-5'>
            <img className='my-pic rounded-circle' src={anik} alt="" />
            <h1 className='name'>MEHEDI HASAN MUGDHO</h1>
            <p className='myGoal'>As a Web developer, I want to be able to design Web pages that can effectively display material, provide interactivity, and be artistically pleasing to the user.Another goal is to make sure users of the website have a good experience.In next 6 month i want to learn SEO ,that's why developing sites that are optimized for search engine ranking, and ensuring that websites are properly coded and functional.</p>
        </div>
    );
};

export default Abouth;
