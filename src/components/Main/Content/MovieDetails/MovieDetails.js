import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSpring } from 'react-spring'
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
  BookmarkButton,
  CastWrapper,
  BlockTitle,
  Actors,
  Actor,
  Photo,
  Name,
  Directors,
  Director,
} from "./MovieDetails.styles";
import { ReactComponent as Bookmark } from '../../../../assets/icons/baseline-bookmark-24px.svg';
import { ReactComponent as PlayArrow } from '../../../../assets/icons/baseline-play_arrow-24px.svg';
import Rating from "./Rating";

const MovieDetails = props => {
  const movie = useSelector(state => state.movie.details);    
  const booked = useSelector(state => state.booked);    
  const dispatch = useDispatch();   
  const isBooked = booked.includes(movie.id);

  const bookMovie = () => dispatch(actions.bookMovie(id));
  const transformY = y => `translateY(${y}px)`;
  
  // Animations
  const [{y, ...rest}, set] = useSpring(() => ({opacity: 0, y: -20, config: {tension: 300, mass: 50, clamp: true}}));
  const styleTransform = { ...rest, transform: y.interpolate(transformY)};
  
  useEffect(() => {
    const {id} = props.match.params;
    dispatch(actions.movieSelected(id));
    dispatch(actions.getMovie());
    set({opacity: 1, y: 0});
  }, [])
  
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
    crew,
  } = movie;

  const release = new Date(release_date);
  const releaseYear = release.getFullYear();
  const URL = "https://image.tmdb.org/t/p/w500";

  if (!id) return null;
  console.log(movie)
  return (
    <DetailsWrapper>
      <Content>
        <Title style={styleTransform}>{title}</Title>
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
          <BookmarkButton onClick={bookMovie} isBooked={isBooked}>
            <Bookmark/>
            { isBooked
            ? 'Added'
            : 'Watch Later'}
          </BookmarkButton>
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
            {crew.slice(0,5).map(director => (
              <Director key={director.id}>{director.name}</Director>
            ))}
          </Directors>
        </div>
      </CastWrapper>
    </DetailsWrapper>
  );
}

export default MovieDetails;
