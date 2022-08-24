import styled from "styled-components";
import { MAIN_COLOR } from "../../../settings/constants";

export const Navbar = styled.nav`
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 62px;
    background-color: ${MAIN_COLOR};
    position: fixed;
`;

export const NavbarItems = styled.li`
    list-style-type: none;
    margin: 0 20px;
    font-size: 22px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: white;
        width: 100%;
        height: 2px;
        bottom: -0.25rem;
        transform-origin: 100% 0;
        transform: scaleX(0);
        transition: transform 0.4s;
    }

    &:hover::before {
        transform-origin: 0 0;
        transform: scaleX(1);
    }

    a {
        color: white;
        text-decoration: none;
    }
`;

export const NavbarListItems = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const LogoArea = styled.div`

`;

export const ConnectButtons = styled.div`
    
`;

export const Avatar = styled.button`
    margin: 10px;
`;

export const Button = styled.button`
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    border-radius: 2rem;
    border: none;
    background-color: white;
`;