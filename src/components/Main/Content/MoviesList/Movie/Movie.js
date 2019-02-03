import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../../actions';
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

    movieSelected = id => {
        this.props.showMovie(id);
    }

    releasedThisMonth = release => {
        const releaseMonth = release.getMonth();
        const todayMonth = new Date().getMonth();
        const lastMonth = (todayMonth - 1 === -1) ? 12 : todayMonth - 1;
        const releasedThisMonth = releaseMonth === todayMonth || releaseMonth === lastMonth;

        return releasedThisMonth;
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
            <MovieWrapper 
                to={`/movie/${id}`} 
                onMouseEnter={this.toggleControls} 
                onMouseLeave={this.toggleControls} 
                onClick={() => this.movieSelected(id)}>
                
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
                        { this.releasedThisMonth(release_date) && (
                            <OtherLabel>New</OtherLabel>
                        )}
                    </Labels>
                </DetailsWrapper>
            </MovieWrapper>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    showMovie: id => dispatch(actions.movieSelected(id))
})

export default connect(
    null,
    mapDispatchToProps
)(Movie);