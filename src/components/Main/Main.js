import React from 'react';
import TopBar from './TopBar';
import Content from './Content';
import { Wrapper } from './Main.styles';

const Main = () => {
    return (
        <Wrapper>
            <TopBar />
            <Content />
        </Wrapper>
    );
};

export default Main;