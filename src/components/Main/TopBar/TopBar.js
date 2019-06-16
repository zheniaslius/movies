import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    TopBarWrapper, 
    Controls,
    TopBarRight,
    Profile,
    Name,
    Action
} from './TopBar.styles';
import avatar from '../../../assets/images/avatar.png';
import { ReactComponent as Search } from '../../../assets/icons/baseline-search-24px.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/baseline-keyboard_arrow_left-24px.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/baseline-keyboard_arrow_right-24px (1).svg';
import Notifications from './Notifications';

const TopBar = props => {
    return (
        <TopBarWrapper>
            <Controls>
                <ArrowLeft onClick={props.history.goBack}/>
                <ArrowRight onClick={props.history.goForward}/>
            </Controls>
            <TopBarRight>
                <Search />
                <Notifications />
                <Profile>
                    <img src={avatar} alt="avatar"/>
                    <Name>John Doe <br/> 
                        <Action>Manage Account</Action>
                    </Name>
                </Profile>
            </TopBarRight>
        </TopBarWrapper>
    );
};

export default (withRouter(TopBar));