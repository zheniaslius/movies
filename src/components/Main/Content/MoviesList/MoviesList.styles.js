import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';

export const SectionName = styled.h1`
    color: #ffffff;
    margin-bottom: 34px;
`;

export const MoviesWrapper = styled.div`
    position: relative;
    margin-left: -25px;

    :after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 160px;
        right: 0;
        top: 0;
        background: linear-gradient(to right,rgba(12, 23, 30, 0) 0%,rgba(12, 23, 30, 0.7) 100%);
    }
`;

export const Controls = styled(SvgIcon)`
    cursor: pointer;
    background-color: #1c242d;
    color: #ffffff;
    padding: 15px;
    z-index: 10;
    position: absolute;
    top: 25%;
    opacity: ${(props) => props.visible ? 1 : 0};

    :first-of-type {
        box-shadow: -27px 5px 79px -13px rgba(0,0,0,0.75);
        transform: translateX(-10px);
        transition: all .1s ease-out;
    }
    
    :last-of-type {
        right: 4%;
        box-shadow: 27px 5px 79px -13px rgba(0,0,0,0.75);
        transition: all .1s ease-out;
    }
`;

export const ScrollContainer = styled.div`
    overflow-x: hidden;
`;

export const MoviesContainer = styled.div`
    display: flex;
    transition: all 0.2s;
`;
