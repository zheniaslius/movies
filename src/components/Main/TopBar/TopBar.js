import React from 'react';
import Notifications from '@material-ui/icons/Notifications';
import {
    ArrowLeft,
    ArrowRight,
    TopBarWrapper, 
    Controls,
    TopBarRight,
    SearchIcon,
    Profile,
    Name,
    Action
} from './TopBar.styles';
import avatar from '../../../assets/images/avatar.png';

const TopBar = () => {
    return (
        <TopBarWrapper>
            <Controls>
                <ArrowLeft nativeColor="white" style={{fontSize: 32}}/>
                <ArrowRight nativeColor="white" style={{fontSize: 32}}/>
            </Controls>
            <TopBarRight>
                <SearchIcon nativeColor="#8b93a6" style={{fontSize: 24}}/>
                <Notifications nativeColor="#8b93a6" style={{fontSize: 24}}/>
                <Profile>
                    <img src={avatar} alt=""/>
                    <Name>John Doe <br/> <Action>Manage Account</Action></Name>
                </Profile>
            </TopBarRight>
        </TopBarWrapper>
    );
};

export default TopBar;