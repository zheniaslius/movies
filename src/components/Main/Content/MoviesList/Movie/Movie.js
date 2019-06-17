import React, { Component } from 'react';
import { animated } from 'react-spring';

import {
    MovieWrapper,
    Poster,
    Title,
    Details,
    Labels,
    AgeRestricion,
    OtherLabel,
    DetailsWrapper,
} from './Movie.styles';

const AnimatedMovie = animated(MovieWrapper);

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
        this.movieRef = React.createRef();
    }

    toggleControls = () => {
        this.setState(prevState => ({
            hovered: !prevState.hovered,
        }))
    }

    isReleasedThisMonth = release => {
        if (release.getFullYear() !== new Date().getFullYear) return false;

        const releaseMonth = release.getMonth();
        const todayMonth = new Date().getMonth();
        const lastMonth = (todayMonth - 1 === -1) ? 12 : todayMonth - 1;
        return todayMonth === releaseMonth || releaseMonth === lastMonth;
    }

    render() {
        let {
            id,
            title,
            release_date,
            genres,
            adult,
            poster_path,
            vote_average,
        } = this.props;

        release_date = new Date(release_date);
        const genreName = genres[0].name;
        const releaseYear = release_date.getFullYear();
        
        return (
            <AnimatedMovie 
                to={`/movie/${id}`} 
                onMouseEnter={this.toggleControls} 
                onMouseLeave={this.toggleControls}
                style={this.props.animation}
                ref={this.movieRef}
            >
                <Poster src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
                <Title>{ title }</Title>
                <DetailsWrapper visible={this.state.hovered}>
                    <Details>
                        <span>{ genreName }</span>•
                        <span>★ { vote_average }</span>•
                        <span>{ releaseYear }</span>
                    </Details>
                    <Labels>
                        { adult && <AgeRestricion>18+</AgeRestricion> }
                        { this.isReleasedThisMonth(release_date) && 
                            <OtherLabel>New</OtherLabel> 
                        }
                    </Labels>
                </DetailsWrapper>
            </AnimatedMovie>
        );
    }
};

export default Movie;