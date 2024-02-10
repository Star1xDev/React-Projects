import React, { useState } from 'react';
import "./StarRating.css"
import { FaStar } from "react-icons/fa6";

const StarRating = ({numOfStars}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleCLick = (index) => {
        setRating(index)
    }

    const handleMouseOver = (index) => {
        setHover(index);
    }

    const HandleMouseleave = (index) => {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(numOfStars)].map((_, index) => {
                    index+= 1
                    return <FaStar key={index}
                        className={index <= (hover || rating) ? "active" : ""}
                        onClick={() => handleCLick(index)}
                        onMouseOver={() =>  handleMouseOver(index)}
                        onMouseLeave={HandleMouseleave} 
                    />
                })
            }
            
        </div>
    );
}

export default StarRating;
