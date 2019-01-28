import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    padding: 0 3em;
    height: 100vh;
    width: 20vw;
    background-color: #131c25;
    text-transform: uppercase;
`;

export const Logo = styled.h1`
    text-align: center;
    color: white;
    font-size: 2em;
    margin: 0;
    padding: 1em 0;
`;

export const NavBlock = styled.div`
    padding-top: 2em;
`;

export const NavHeader = styled.span`
    display: inline-block;
    padding-bottom: 34px;
    color: #606878;
    font-size: 14px;
    letter-spacing: 1px;
`;

export const NavLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavLink = styled.li`
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 2px;
    padding-bottom: 34px;
    color: white;
    position: relative;
    transition: color .2s ease-out;
    &:hover {
        color: #10d5ff;
    }
    &:hover:after {
        content: "";
        display: block;
        position: absolute;
        left: -50px;
        top: 0;
        height: 100%;
        width: 5px;
        background-color: #10d5ff;
        transform: translateY(-25%);
    }
`;