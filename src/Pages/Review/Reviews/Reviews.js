import React from 'react';
import './Reviews.css'
const Reviews = ({studentReview}) => {
    console.log(studentReview)
    return (
        <div className='student-info shadow-lg'>
            <img src={studentReview.personImg} alt="" />
            <div>
                <h3>{studentReview.PersonName}</h3>
                <h4>Ratings: {studentReview.Ratings}</h4>
                <p><small className='review'>{studentReview.review}</small></p>
            </div>
        </div>
    );
};

export default Reviews;