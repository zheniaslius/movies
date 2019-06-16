import React from 'react';
import { connect } from 'react-redux'
import { ReactComponent as NotificationIcon } from '../../../../assets/icons/baseline-notifications-24px.svg';
import { NotificationWrapper } from './Notifications.styles';

const Notifications = ({ booked }) => {
    const isActive = booked.length;
    return (
        <NotificationWrapper active={isActive}>
            <NotificationIcon/>
            {/* <Container>
                {booked.map(movie => 
                    <li key={movie.id}>You added <span>{movie.title} to bookmarked</span></li>
                )}
            </Container> */}
        </NotificationWrapper>
    );
};

const getBookedMovies = (bookedIds, movies) => movies.filter(movie => bookedIds.includes(movie.id));

const mapStateToProps = state => ({
    booked: getBookedMovies(state.booked, state.movies.movies)
})

export default connect(
    mapStateToProps,
    null
)(Notifications);