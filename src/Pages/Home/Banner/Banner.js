import React from 'react';
import './Banner.css'
import BannerVideo from '../../../images/gym-video.mp4'

const Banner = () => {
    return (
        <div>
            <div >
                <video loop muted autoPlay controls className='banner-video'  src={BannerVideo}></video>
            </div>
            <div className=' video-overlay'>
               <div className='description'>
               <h1 className='title'>Fitness Fighter</h1>
                <p className='container'>Being physically and mentally fit is necessary for an individual to live a happy, long life. Typically, exercise is one of the best ways to keep a person healthy. Empower yourself to make the  change you need to make</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;