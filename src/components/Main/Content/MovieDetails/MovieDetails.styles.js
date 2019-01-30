import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    height: 100%;
`;

export const Content = styled.div`
    padding-left: 5%;
    width: 40%;
`;

export const Title = styled.h1`
    width: max-content;
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
    margin-top: 12px;
    color: #ffffff;
`;