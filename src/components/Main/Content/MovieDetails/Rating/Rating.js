import React from 'react';
import {
    RatingWrapper,
    Stars,
    StarIcon
} from './Rating.styled';

const starsController = vote => {
    const voteToFive = Math.ceil(vote / 2);

    let starsToshow = [];
    for (let i = 1; i <= 5; i++) {
        starsToshow.push((i <= voteToFive) ? <StarIcon blue="true" key={i}/> : <StarIcon key={i}/>)
    }
    return starsToshow;
}

const Rating = ({ vote }) => {
    return (
        <RatingWrapper>
            <Stars>
                { starsController(vote) }
            </Stars>
            <span>{ vote }</span><span>/10</span>
        </RatingWrapper>
    );
};

export default Rating;