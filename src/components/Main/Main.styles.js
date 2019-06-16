import styled, { css } from 'styled-components';
import { media } from '../App.styles';

const background = css`
    background-image: ${props => `linear-gradient(rgba(19,28,37,.95)0%,rgba(19,28,37,.95)4%,rgba(19,28,37,.7)), url(${props.image})`};

    ${media.mobileL`
        background-size: cover;
    `}
`;

export const Wrapper = styled.div`
    background-color: ${props => props.theme.dark_grey};
    ${props => (props.showbg) && background};
    background-size: cover;
    background-repeat: no-repeat;
    width: 80vw;
    padding: 45px 0 45px 80px;
    overflow: hidden;

    ${media.laptop`
        width: 100vw;
        padding: 25px 50px;
    `}

    ${media.mobileL`
        padding: 25px 30px;
    `}
`;