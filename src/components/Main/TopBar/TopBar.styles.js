import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export const TopBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 75px;
    padding-right: 80px;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
    margin-right: .5em;
    cursor: pointer;    
`;

export const ArrowRight = styled(KeyboardArrowRight)`
    cursor: pointer;    
`;

export const SearchIcon = styled(Search)`
    padding-right: 20px;
`;

export const Controls = styled.div`
    fill: white;
`;

export const TopBarRight = styled.div`
    display: flex;
    align-items: center;
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 43px;

    img {
        height: 40px;
        padding-right: 1em;
    }
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
`;