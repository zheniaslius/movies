import React, { Component } from 'react';
import {
    MovieWrapper,
    Poster,
    Title,
    Details,
    Labels,
    AgeRestricion,
    OtherLabel,
    DetailsWrapper
} from './Movie.styles';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    toggleControls = () => {
        this.setState(prevState => ({
            hovered: !prevState.hovered,
        }))
    }

    render() {
        let {
            title,
            release_date,
            genres,
            adult,
            poster_path,
            vote_average
        } = this.props;

        release_date = new Date(release_date);
        const genreName = genres[0].name;
        const releaseYear = release_date.getFullYear();

        return (
            <MovieWrapper onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
                <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
                <Title>{ title }</Title>
                <DetailsWrapper visible={this.state.hovered}>
                    <Details>
                        <span>{ genreName }</span>•
                        <span>★ { vote_average }</span>•
                        <span>{ releaseYear }</span>
                    </Details>
                    <Labels>
                        { adult && <AgeRestricion>18+</AgeRestricion> }
                        <OtherLabel>New</OtherLabel>
                    </Labels>
                </DetailsWrapper>
            </MovieWrapper>
        );
    }
};

export default Movie;