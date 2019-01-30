import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';
import {
    DetailsWrapper, 
    Content,
    Title,
    Short,
    Tags,
    Description,
    ButtonsWrapper,
    Button,
    CastWrapper,
    BlockTitle,
    Actors,
    Actor,
    Photo,
    Name,
} from './MovieDetails.styles';
import Rating from './Rating';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Bookmark from '@material-ui/icons/Bookmark';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.getMovie(this.props.movie);
    }

    render() {
        const {
            title,
            vote_average,
            genres,
            runtime,
            release_date,
            overview,
            adult,
            cast
        } = this.props.movie;

        const release = new Date(release_date);
        const releaseYear = release.getFullYear();
        const URL = 'https://image.tmdb.org/t/p/w500';

        if (!title) return null;
        
        return (
            <DetailsWrapper>
                <Content>
                    <Title>{ title }</Title>
                    <Short>
                        <Rating vote={vote_average}/>
                        <Tags>
                            <span>{ genres[0].name }</span>
                            <span>{ runtime } min</span>
                            <span>{ releaseYear }</span>
                            { adult && 
                            <span>18+</span> }
                        </Tags>
                    </Short>
                    <Description>{ overview }</Description>
                    <ButtonsWrapper>
                        <Button primary><PlayArrow/>Play movie</Button>
                        <Button><Bookmark/>Watch Later</Button>
                    </ButtonsWrapper>
                    <CastWrapper>
                        <BlockTitle>Cast</BlockTitle>
                        <Actors>
                            { cast.map(actor => 
                                <Actor key={actor.cast_id}>
                                    <Photo src={`${URL}/${actor.profile_path}`}></Photo>
                                    <Name>{ actor.name }</Name>
                                </Actor>
                            )}
                        </Actors>
                    </CastWrapper>
                </Content>
            </DetailsWrapper>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.movie.details
})

const mapDispatchToProps = dispatch => ({
    getMovie: () => dispatch(actions.getMovie())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);