import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    padding-left: 5%;
`;

export const Content = styled.div`
    width: 50%;
`;

export const Title = styled.h1`
    width: max-content;
    max-width: fit-content;
    color: #ffffff;
    font-size: 4em;
    margin: 0.5em 0;
`;

export const Short = styled.div`
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;    
    color: ${props => props.theme.light_grey};
    margin-bottom: 45px;
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
`;

export const Description = styled.p`
    color: #ffffff;
    line-height: 1.6;
    margin: 0;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    button:first-of-type {
        margin-right: 35px;
    }
    margin: 65px 0;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    background: ${props => props.primary ?
    props.theme.light_blue : "none"};
    color: ${props => props.primary ?
    "#ffffff" : props.theme.light_grey};
    border: 2px solid ${props => props.primary ?
    props.theme.light_blue : props.theme.light_grey};
    padding: 1em 0;
    width: 200px;

    svg {
        padding-right: 10px;
    }
`;

export const CastWrapper = styled.div`
    display: flex;

    > div:first-child {
        margin-right: 14%;
    }
`;

export const BlockTitle = styled.h3`
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1em;
`;

export const Actors = styled.div`
    display: flex;
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