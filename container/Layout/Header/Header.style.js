import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;

    @media only screen and (max-width: 1100px) {
        .navbar {
            display: none;
        }
        .transparent {
            .navbar_search {
                display: none;
            }
        }
    }
`;

export const MenuWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    background: whitesmoke;
`;

export const MenuInner = styled.div`
    
`;

export const MobileNavbar = styled.div`

`;

export const LogoArea = styled.div`

`;

export const CloseDrawer = styled.div`

`;

export const AvatarWrapper = styled.div`

`;

export const AvatarImage = styled.div`

`;

export const AvatarInfos = styled.div`

`;

export const NavbarSearchWrapper = styled.div`

`;

export default HeaderWrapper