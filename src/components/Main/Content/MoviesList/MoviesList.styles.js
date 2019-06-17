import styled from 'styled-components';
import { animated } from 'react-spring'
import { media } from '../../../App.styles';

export const SectionName = styled(animated.h1)`
    color: #ffffff;
    margin-bottom: 34px;

    ${media.mobileL`
        margin-bottom: 0;
    `}
`;

export const MoviesWrapper = styled.div`
    position: relative;
    margin-left: -25px;

    :after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 190px;
        right: 0;
        top: 0;
        background: linear-gradient(to right,rgba(12, 23, 30, 0) 0%,rgba(12, 23, 30, 0.7) 100%);
    }

    ${media.mobileL`
        margin-right: -48px;
    `}
`;

export const Controls = styled.svg`
    cursor: pointer;
    background-color: #1c242d;
    fill: #ffffff;
    padding: 15px;
    z-index: 10;
    position: absolute;
    top: 25%;
    transition: all .1s ease-out !important;

    svg {
        height: 32px;
        width: auto;
    }

    :active {
        transform: scale(.8) translateX(0) !important;
        transform-origin: center center;
    }

    :first-of-type {
        box-shadow: -27px 5px 79px -13px rgba(0,0,0,0.75);
        margin-left: -10px;
    }
    
    :last-of-type {
        right: 4%;
        box-shadow: 27px 5px 79px -13px rgba(0,0,0,0.75);
    }
`;

export const ScrollContainer = styled.div`
    overflow: hidden;
`;

export const MoviesContainer = styled(animated.div)`
    display: flex;
    transition: all 0.5s ease;
`;
