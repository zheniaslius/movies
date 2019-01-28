import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../../../actions';
import {
    Controls,
    MoviesWrapper,
    ScrollContainer,
    MoviesContainer
} from './MoviesList.styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Movie from './Movie';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
        this.scrolled = 0;
        this.firstItemIndex = 0;
    }

    componentDidMount() {
        this.props.getMovies();
    }

    toggleControls = () => {
        this.setState(prevState => ({
            hovered: !prevState.hovered,
        }))
    }

    scroll = to => {
        if (this.firstItemIndex === 0 && to > 0) return;
        
        this.scrollable.style.transform = `translateX(${this.scrolled + to}px)`;
        this.scrolled += to;
        this.firstItemIndex += (to > 0) ? -1 : 1;
    }

    render() {
        const { movies } = this.props;

        return (
            <MoviesWrapper onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
                <ScrollContainer>
                    <MoviesContainer ref={(scrollable)=>{this.scrollable = scrollable}}>
                        {
                            movies.map((movie, id) => 
                                <Movie key={id} {...movie}/>
                            )
                        }
                    </MoviesContainer>
                </ScrollContainer>
                <Controls 
                    as={KeyboardArrowLeft}
                    style={{fontSize: 32}}
                    visible={this.state.hovered}
                    onClick={() => this.scroll(250)}/>
                <Controls 
                    as={KeyboardArrowRight} 
                    style={{fontSize: 32}} 
                    visible={this.state.hovered}
                    onClick={() => this.scroll(-250)}/>
            </MoviesWrapper>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(actions.getMovies())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);