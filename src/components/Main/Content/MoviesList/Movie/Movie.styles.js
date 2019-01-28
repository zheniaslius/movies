import styled from 'styled-components';

export const MovieWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 30px;
    cursor: pointer;
    padding: 26px 20px;
    transition: all .1s ease-out;

    :hover {
        background-color: #131c25;
        box-shadow: 0px 14px 50px -16px rgba(0,0,0,0.35);
    }
`;

export const Poster = styled.img`
    width: 180px;
    margin-bottom: 28px;
    box-shadow: 2px 14px 61px -23px rgba(0,0,0,0.71);
`;


export const Title = styled.span`
    display: block;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
`;

export const DetailsWrapper = styled.div`
    opacity: 0;
    ${MovieWrapper}:hover & {
        opacity: 1;
    }
`;

export const Details = styled.div`
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
    color: ${props => props.theme.light_grey};

    span {
        padding: 0 5px;
    }
`;

export const Labels = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    > div {
        padding: 8px;
    }
`;

export const AgeRestricion = styled.div`
    font-weight: bold;
    color: ${props => props.theme.light_grey};
    background-color: ${props => props.theme.dark_grey};
    margin-right: 5px;
`;

export const OtherLabel = styled.div`
    color: #ffffff;
    text-transform: uppercase;
    background-color: #9045e0;
`;