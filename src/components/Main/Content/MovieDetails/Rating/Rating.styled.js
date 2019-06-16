import styled from 'styled-components';
import { ReactComponent as Star } from '../../../../../assets/icons/baseline-star-24px.svg';

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;

    div {
        margin-right: 10px;
    }

    span:first-of-type {
        color: #ffffff;
        margin-right: 5px;
    }
`;


export const Stars = styled.div`
    position: relative;
    top: 2px;
`;

export const StarIcon = styled(Star)`
    padding-right: 5px;
    font-size: 18px !important;
    fill: ${props => props.blue ? 
    props.theme.light_blue : props.theme.light_grey} !important;
`;