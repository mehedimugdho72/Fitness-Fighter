import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
    return (
        <div>
            <h1  className='review-title'>Student Review</h1>
            <div className='review-container'>

                {
                    reviews.map(studentReview => <Reviews
                        key={studentReview.id}
                        studentReview ={studentReview }
                    ></Reviews>)
                    
                }
            </div>
        </div>
    );
};

export default Review;