import React from 'react';
import { SidebarWrapper,
         Logo,
         NavHeader,
         NavBlock,
         NavLinks,
         NavLink
} from './Sidebar.styles';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <Logo>Telly</Logo>
            <NavBlock>
                <NavHeader>Browse telly</NavHeader>
                <NavLinks>
                    <NavLink active={true}>Discover</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Cartoons</NavLink>
                    <NavLink>Tv series</NavLink>
                </NavLinks>
            </NavBlock>
        </SidebarWrapper>
    );
};

export default Sidebar;