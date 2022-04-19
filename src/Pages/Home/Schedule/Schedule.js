import React from 'react';
import './Schedule.css'
import icon from '../../../images/line-dec.png'

const Schedule = () => {
    return (
        <div>
            <div>
                <h1 className='schedule-title'>CLASSES <span>SCHEDULE</span></h1>
                <div className='icon'>
                    <img src={icon} alt="" />
                </div>
            </div>
            <table class="table table-striped schedule-container">
                <thead>
                    <tr className='schedule-details'>
                        <th scope="col">Fitness Class</th>
                        <th scope="col">Mentor Name</th>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='schedule-details'>
                        <th scope="row">Strength Training</th>
                        <td>Rich Gaspari</td>
                        <td>Friday</td>
                        <td>
                            <p>8:00am-10am</p>
                            <p>5:00pm-7:00pm</p>
                        </td>
                    </tr>
                    <tr className='schedule-details'>
                        <th scope="row">Weight Loss</th>
                        <td>Charlotte</td>
                        <td>Saturday</td>
                        <td> <p>9:00am-11:00am</p>
                            <p>4:00pm-4:00pm</p></td>
                    </tr>
                    <tr className='schedule-details'> 
                        <th scope="row">Endurance Training</th>
                        <td>Ronnie Coleman</td>
                        <td>Sunday</td>
                        <td> <p>8:00am-10am</p>
                            <p>5:00pm-7:00pm</p></td>
                    </tr>
                    <tr className='schedule-details'>
                        <th scope="row">Cardio Training</th>
                        <td>Charlotte</td>
                        <td>Monday</td>
                        <td><p>8:00am-10am</p>
                            <p>5:00pm-7:00pm</p></td>
                    </tr>
                    <tr className='schedule-details'>
                        <th scope="row">Crossfit Training</th>
                        <td>Ronnie Coleman</td>
                        <td>Tuesday</td>
                        <td><p>9:00am-10am</p>
                            <p>6:00pm-8:00pm</p></td>
                    </tr>
                    <tr className='schedule-details'>
                        <th scope="row">Yoga</th>
                        <td>Charlotte</td>
                        <td>Wednesday,</td>
                        <td> <p>8:00am-11am</p>
                            <p>6:00pm-7:00pm</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;