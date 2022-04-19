import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer-container shadow-lg'>
            <div className='footer-description'>
                <div>
                    <h3 className='footer-header'>About Fitness Fighter</h3>
                    <div className='details'>
                        <p>Fitness Fighter is dedicated to making your dreams of a successful fitness career come true in the most efficient and timely way..</p>
                    </div>
                </div>
                <div>
                    <h3 className='footer-header'>Top Features</h3>
                    <div className='details'>
                        <p>Online Coaching</p>
                        <p>Consulting</p>
                        <p>Born Fitness +</p>
                        <p>Fit father Guid</p>
                        <p>Fat loss Academy</p>
                    </div>

                </div>
                <div>
                    <h3 className='footer-header'>Contact Us</h3>
                    <div className='details'>
                        <p>USA, California 20, First Avenue, California
                        </p>
                        <p>Tel: +7 998 71 150 ## ##
                        </p>
                        <p>Fax: +7 998 71 150 ## ##
                        </p>
                        <p>mehedimugdho72@gmail.com</p>
                    </div>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
            <div className='copyright mt-5'>
                <span>Copyright &copy; {year} Fitness Fighter</span>
                <p>All Rights Reserve by <span className='footer-header'>MEHEDI HASAN MUGDHO</span></p>
            </div>
        </div>
    );
};

export default Footer;