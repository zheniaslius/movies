import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../../actions";
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
  Directors,
  Director
} from "./MovieDetails.styles";
import Rating from "./Rating";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Bookmark from "@material-ui/icons/Bookmark";

class MovieDetails extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.movieSelected(id);
    this.props.getMovie();
  }

  book = () => {
    const { id } = this.props.movie;
    this.props.bookMovie(id)
  }

  render() {
    const {
      id,
      title,
      vote_average,
      genres,
      runtime,
      release_date,
      overview,
      adult,
      cast,
      crew
    } = this.props.movie;
    const { booked } = this.props;

    const release = new Date(release_date);
    const releaseYear = release.getFullYear();
    const URL = "https://image.tmdb.org/t/p/w500";

    if (!title) return null;

    return (
      <DetailsWrapper>
            <Content>
          <Title>{title}</Title>
          <Short>
            <Rating vote={vote_average} />
            <Tags>
              <span>{genres[0].name}</span>
              <span>{runtime} min</span>
              <span>{releaseYear}</span>
              {adult && <span>18+</span>}
            </Tags>
          </Short>
          <Description>{overview}</Description>
          <ButtonsWrapper>
            <Button primary>
              <PlayArrow />
              Play movie
            </Button>
            <Button onClick={this.book}>
              <Bookmark/>
              {booked.includes(id)
              ? 'Added'
              : 'Watch Later'}
            </Button>
          </ButtonsWrapper>
        </Content>
        <CastWrapper>
          <div>
            <BlockTitle>Cast</BlockTitle>
            <Actors>
              {cast.map(actor => (
                <Actor key={actor.cast_id}>
                  <Photo src={`${URL}/${actor.profile_path}`} />
                  <Name>{actor.name}</Name>
                </Actor>
              ))}
            </Actors>
          </div>
          <div>
            <BlockTitle>Directed by</BlockTitle>
            <Directors>
              {crew.map((director, i) => (
                <Director key={i}>{director.name}</Director>
              ))}
            </Directors>
          </div>
        </CastWrapper>
      </DetailsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.details,
  booked: state.booked
});

const mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch(actions.getMovie()),
  movieSelected: id => dispatch(actions.movieSelected(id)),
  bookMovie: id => dispatch(actions.bookMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
