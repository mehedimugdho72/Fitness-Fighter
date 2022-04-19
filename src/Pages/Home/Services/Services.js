import React, { useEffect, useState } from 'react';
import './Services.css'
import img from '../../../images/tabs-first-icon.png'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='services'>
                <h1>Our <span className='services-title' id='services'>Services</span></h1>
                <div><img src={img} alt="" /></div>
            </div>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;