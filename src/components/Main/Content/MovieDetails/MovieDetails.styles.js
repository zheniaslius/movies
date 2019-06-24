import styled from 'styled-components';
import { animated } from 'react-spring';
import { media } from '../../../App.styles';

export const DetailsWrapper = styled.div`
    padding-left: 5%;

    ${media.mobileL`
        padding-left: 2%;
    `}
`;

export const Content = styled.div`
    width: 50%;

    ${media.mobileL`
        width: unset;
    `}
`;

export const Title = styled(animated.h1)`
    width: max-content;
    max-width: fit-content;
    color: #ffffff;
    font-size: 4em;
    margin: 0.5em 0;

    ${media.mobileL`
        font-size: 2em;
    `}
`;

export const Short = styled(animated.div)`
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;    
    color: ${props => props.theme.light_grey};
    margin-bottom: 45px;

    ${media.mobileL`
        flex-direction: column;
        margin-bottom: 30px;
    `}
`;

export const Tags = styled.div`
    span:after {
        content:"•";
        display:inline-block;
        transform: scale(0.7);
        padding: 0 10px;
    }

    span:last-of-type {
        border: 1.3px solid ${props => props.theme.light_grey};
        padding: 2px 8px;

        :after {
            content: none;
        }
    }

    ${media.mobileL`
        line-height: 2.1;
    `}
`;

export const Description = styled(animated.p)`
    color: #ffffff;
    line-height: 1.6;
    margin: 0;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    margin: 65px 0;

    button:first-of-type {
        margin-right: 35px;

        ${media.mobileL`
            margin-right: 22px;
        `}
    }

    ${media.mobileL`
        margin: 35px 0 45px;
    `}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: .9em;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    background: ${props => props.primary ?
    props.theme.light_blue : "none"};
    color: ${props => props.primary ?
    "#ffffff" : props.theme.light_grey};
    border: 2px solid ${props => props.primary ?
    props.theme.light_blue : props.theme.light_grey};
    padding: 1.2em 10px;
    width: 200px;

    ${media.mobileL`
        padding: 10px;
        width: auto;
    `}

    svg {
        padding-right: 10px;
        fill: #ffffff;
        width: 1.2em;
        height: auto;
    }
`;

export const BookmarkButton = styled(Button)`
    color: ${props => props.isBooked && props.theme.light_blue};
    border-color: ${props => props.isBooked && props.theme.light_blue};

    svg {
        fill: ${props => (props.isBooked)
        ? props.theme.light_blue
        : props.theme.light_grey};
    }
`;

export const CastWrapper = styled.div`
    display: flex;

    > div:first-child {
        margin-right: 14%;

        ${media.mobileL`
            margin-bottom: 30px;
        `}
    }

    ${media.mobileL`
        flex-direction: column;
    `}
`;

export const BlockTitle = styled.h3`
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1em;
`;

export const Actors = styled.div`
    display: flex;

    ${media.mobileL`
        width: 100vw;
        overflow: scroll;

        > div:last-of-type {
            padding-right: 90px;
        }
    `}
`;

export const Actor = styled.div`
    width: min-content;
    margin-right: 30px;
`;

export const Photo = styled.img`
    width: 80px;
`;

export const Name = styled.span`
    display: inline-block;
    line-height: 1.4;
    margin-top: 12px;
    color: #ffffff;
`;

export const Directors = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Director = styled.li`
    color: #ffffff;
    padding-bottom: 10px;
`;