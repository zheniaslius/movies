import styled from 'styled-components';
import { media } from '../../App.styles';

export const TopBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 75px;
    padding-right: 80px;

    ${media.mobileL`
        padding-right: 0;
        margin-bottom: 55px;
    `}
`;

export const Controls = styled.div`
    svg {
        cursor: pointer;
        fill: white;
        height: 32px;
        width: auto;
        color: #ffffff;

        :first-child {
            margin-right: 5px;
        }
    }

    ${media.mobileL`
        display: flex;
        margin-right: 40px;
    `}
`;

export const TopBarRight = styled.div`
    display: flex;
    align-items: center;

    svg {
        fill: #8b93a6;
        font-size: 24px;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 43px;

    img {
        height: 40px;
        padding-right: 1em;
    }

    ${media.mobileL`
        align-items: center;
    `}
`;


export const Name = styled.span`
    font-weight: bold;
    font-size: 1em;
    color: #ffffff;
`;

export const Action = styled.span`
    color: ${props => props.theme.light_grey};
    font-weight: normal;
    font-size: 14px;

    ${media.mobileL`
        display: none;
    `}
`;