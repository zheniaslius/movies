import styled, { css } from 'styled-components';

const background = css`
    background-image: ${props => `linear-gradient(rgba(19,28,37,.95)0%,rgba(19,28,37,.95)4%,rgba(19,28,37,.7)), url(${props.image})`};
`;

export const Wrapper = styled.div`
    background-color: ${props => props.theme.dark_grey};
    ${props => (props.showbg) && background};
    background-size: cover;
    background-repeat: no-repeat;
    width: 71vw;
    padding: 45px 0 45px 80px;
`;