import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import Content from './Content';
import { Wrapper } from './Main.styles';

class Main extends Component {
    constructor(props){
        super();
    }

    getFullPath = img => img && `https://image.tmdb.org/t/p/w1280/${img}`;

    render() {
        const { background } = this.props;
        const { pathname } = this.props.location;
        const showbg = pathname !== '/';

        return (
            <Wrapper image={this.getFullPath(background)} showbg={showbg}>
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