import React from 'react';
import { SectionName, } from './Content.styles';
import MoviesList from './MoviesList';

const Content = () => {
    return (
        <div>
            <SectionName>Recommended For You</SectionName>
            <MoviesList />
        </div>
    );
};

export default Content;