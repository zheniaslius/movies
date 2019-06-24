import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useTrail, useSpring, animated, config } from 'react-spring';
import ReactDOM  from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    SectionName,
    Controls,
    MoviesWrapper,
    ScrollContainer,
    MoviesContainer
} from './MoviesList.styles';

import { ReactComponent as ArrowLeft } from '../../../../assets/icons/baseline-keyboard_arrow_left-24px.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/icons/baseline-keyboard_arrow_right-24px (1).svg';

import actions from '../../../../actions';
import { isInView } from '../../../../helpers';

import Movie from './Movie';

const AnimatedMovie = animated(Movie);
const CAROUSEL_ITEM_WIDTH = 240;

const MoviesList = props => {
    let lastMovie, scrolled = 0;
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies);
    const scrollable = useRef(null);
    const [scrollError, setScrollError] = useState(false);

    // Animations
    const [trail, setTrail, stopTrail] = useTrail(movies.length, () => ({
        y: 50,
        opacity: 0,
    }));
    const spring = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow });
    const [{x}, setError] = useSpring(() => ({ x: 0, config: { clamp: true, mass: 1, tension: 500 } }));

    useEffect(() => {
        if (!movies.length) dispatch(actions.getMovies());
    }, [])
    useEffect(() => () => stopTrail());
    useEffect(() => {
        scrollError && setError({ to: [{ x: 50 }, { x: 0 }] });
        return () => setScrollError(false);
    }, [scrollError]);

    const scroll = to => {
        if (!scrolled && to > 0) {
            setScrollError(true);
            return;
        }
        const mobileHeight = 900;
        const scrollItems = (window.innerHeight < mobileHeight) ? 1 : 4;
        scrollable.current.style.transform = `translateX(${(scrolled + to) * scrollItems}px)`;
        scrolled += to;
    
        if (isInView(ReactDOM.findDOMNode(lastMovie))) {
            dispatch(actions.getMovies());
        }
    }

    !scrolled && setTrail({ y: 0, opacity: 1 }); 
    console.log(movies)
    if (!movies.length) return null;
    return (
        <Fragment>
            <SectionName style={spring}>Recommended For You</SectionName>
            <MoviesWrapper>
                <ScrollContainer>
                    <MoviesContainer ref={scrollable} style={{transform: x.interpolate(x => `translateX(${x}px)`)}}>
                        {
                            trail.map(({y, ...rest}, index) => (
                                    <AnimatedMovie 
                                        key={movies[index].id} 
                                        animation={index < 8
                                            ? {...rest, transform: y.interpolate(y => `translateY(${y}px)`)}
                                            : null
                                        }
                                        ref={movie => (index === movies.length-5) ? lastMovie = movie : null}
                                        {...movies[index]}
                                    />
                            ))
                        }
                    </MoviesContainer>
                </ScrollContainer>
                <Controls 
                    as={ArrowLeft}
                    onClick={() => scroll(CAROUSEL_ITEM_WIDTH)}/>
                <Controls 
                    as={ArrowRight} 
                    onClick={() => scroll(-CAROUSEL_ITEM_WIDTH)}/>
            </MoviesWrapper>
        </Fragment>
    );
}

export default MoviesList;