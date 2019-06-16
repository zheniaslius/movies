import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useTrail, useSpring, animated, config } from 'react-spring'
import ReactDOM  from 'react-dom';
import { connect } from 'react-redux'
import actions from '../../../../actions';
import {
    SectionName,
    Controls,
    MoviesWrapper,
    ScrollContainer,
    MoviesContainer
} from './MoviesList.styles';

import { ReactComponent as ArrowLeft } from '../../../../assets/icons/baseline-keyboard_arrow_left-24px.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/icons/baseline-keyboard_arrow_right-24px (1).svg';

import { isInView } from '../../../../helpers';

import Movie from './Movie';
const AnimatedMovie = animated(Movie);

const MoviesList = props => {
    const {
        getMovies,
        loadMoreMovies,
        movies
    } = props;

    const scrollable = useRef(null);
    const [lastMovie, setLastMovie] = useState();
    const [scrolled, setScrolled] = useState(0);
    const [firstItemIndex, setFirstItemIndex] = useState(0);
    const [trail, set] = useTrail(movies.length, () => ({
        y: 50,
        opacity: 0,
    }))
    const spring = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow })

    useEffect(() => {
        getMovies();
    }, [])

    const scroll = to => {
        if (firstItemIndex === 0 && to > 0) return;
        
        const mobileHeight = 900;
        const scrollItems = (window.innerHeight < mobileHeight) ? 1 : 4;
        scrollable.current.style.transform = `translateX(${(scrolled + to) * scrollItems}px)`;
        setScrolled(scrolled + to);
        setFirstItemIndex(setFirstItemIndex + ((to > 0) ? -1 : 1));
    
        if (isInView(ReactDOM.findDOMNode(lastMovie))) {
            loadMoreMovies();
        }
    }

    // Don`t animate when scrolled
    !scrolled && set({ y: 0, opacity: 1 });
    return (
        <Fragment>
            <SectionName style={spring}>Recommended For You</SectionName>
            <MoviesWrapper>
                <ScrollContainer>
                    <MoviesContainer ref={scrollable}>
                        {
                            trail.map(({y, ...rest}, index) => (
                                <AnimatedMovie 
                                    key={movies[index].id} 
                                    animation={index < 7 
                                        ? {...rest, transform: y.interpolate(y => `translateY(${y}px)`)}
                                        : null
                                    }
                                    ref={movie => (index === movies.length-5) ? setLastMovie(movie) : null}
                                    {...movies[index]}
                                />
                            ))
                        }
                    </MoviesContainer>
                </ScrollContainer>
                <Controls 
                    as={ArrowLeft}
                    onClick={() => scroll(240)}/>
                <Controls 
                    as={ArrowRight} 
                    onClick={() => scroll(-240)}/>
            </MoviesWrapper>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(actions.getMovies()),
    loadMoreMovies: () => dispatch(actions.loadMoreMovies())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);