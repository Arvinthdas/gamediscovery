import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import PropTypes from "prop-types";
import './StarRating.css';

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, idx) => {
        const val = idx + 0.5;
        return (
            <li key={idx}>
                {
                    rating >= idx + 1 ? (<BsStarFill />) : rating >= val ? (<BsStarHalf />) : (<BsStar />)
                }
            </li>
        )
    });

    return (
        <ul className='star-rating-wrapper rating'>
            {stars}
        </ul>
    )
}

export default StarRating;

StarRating.propTypes = {
    rating: PropTypes.number.isRequired
}
