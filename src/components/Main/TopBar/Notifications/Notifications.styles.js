import styled from 'styled-components';

export const NotificationWrapper = styled.div`
    position: relative;
    padding-left: 20px;

    ::after {
        opacity: ${props => props.active ? 1 : 0};
        content: '';
        position: absolute;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        border: 3px solid #0c171e;
        background-color: ${props => props.theme.light_blue};
        top: -4px;
        right: -1px;
        transition: opacity .3s ease;
    }
`;

export const Container = styled.ul``;