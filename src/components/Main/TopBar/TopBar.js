import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    TopBarWrapper, 
    Controls,
    TopBarRight,
    SearchIcon,
    NotificationIcon,
    Profile,
    Name,
    Action
} from './TopBar.styles';
import avatar from '../../../assets/images/avatar.png';

const TopBar = props => {
    return (
        <TopBarWrapper>
            <Controls>
                <ArrowLeft nativeColor="white" style={{fontSize: 32}} onClick={props.history.goBack}/>
                <ArrowRight nativeColor="white" style={{fontSize: 32}} onClick={props.history.goForward}/>
            </Controls>
            <TopBarRight>
                <SearchIcon nativeColor="#8b93a6" style={{fontSize: 24}}/>
                <NotificationIcon nativeColor="#8b93a6" style={{fontSize: 24}}/>
                <Profile>
                    <img src={avatar} alt=""/>
                    <Name>John Doe <br/> <Action>Manage Account</Action></Name>
                </Profile>
            </TopBarRight>
        </TopBarWrapper>
    );
};

export default withRouter(TopBar);