import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Mentor.css'
import mentor1 from '../../../images/Mentor/mentor6.png'
import mentor2 from '../../../images/Mentor/mentor8.jpg'
import mentor3 from '../../../images/Mentor/mentor5.png'
import logo from '../../../images/tabs-first-icon.png'
const Mentor = () => {
    return (

        <div>
            <div className='title-container '>
                <h1 >Our <span className='mentor-title'>Mentor</span>< img src={logo} alt="" /></h1>
            </div>
            <div>
                <CardGroup className=' gap-3 container w-75'>

                    <Card className='shadow-lg mentor-container '>
                        <Card.Img  variant="top" src={mentor3} />
                        <Card.Body>
                            <Card.Title className='mentor-name'>Rich Gaspari</Card.Title>
                            <Card.Text>
                                He’s authored four books on body transformation and runs a team of 250 elite trainers. Nick recognises that to be a truly great personal trainer.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='shadow-lg mentor-container'>
                        <Card.Img variant="top" src={mentor2} />
                        <Card.Body >
                            <Card.Title className='mentor-name'>Charlotte</Card.Title>
                            <Card.Text>
                                Exercise professional Charlotte has published a number of books which have become Sunday Times bestsellers.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='shadow-lg mentor-container'>
                        <Card.Img variant="top" src={mentor1} />
                        <Card.Body >
                            <Card.Title className='mentor-name'>Ronnie Coleman</Card.Title>
                            <Card.Text>
                                With a Masters degree in strength and conditioning from Oxford University, Ronnie Coleman left university and went into a bodybuilding career.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Mentor;