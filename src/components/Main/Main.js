import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import Content from './Content';
import { Wrapper } from './Main.styles';

class Main extends Component {
    constructor(props){
        super();
    }

    getFullPath = img => `https://image.tmdb.org/t/p/w1280/${img}`;

    render() {
        const { background } = this.props;
        return (
            <Wrapper image={this.getFullPath(background)} showbg={!!background}>
                <TopBar />
                <Content />
            </Wrapper>
        );
    }
};

const mapStateToProps = state => ({
    background: state.movie.details.backdrop_path
})

export default connect(
    mapStateToProps,
    null
)(Main);