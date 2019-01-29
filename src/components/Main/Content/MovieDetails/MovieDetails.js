import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.getMovie(this.props.movie);
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movieDetails
})

const mapDispatchToProps = dispatch => ({
    getMovie: () => dispatch(actions.getMovie())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);