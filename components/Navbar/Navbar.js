import { useContext } from "react";
import { useRouter } from "next/router";
import NavbarWrapper, {
    LogoArea,
    MenuArea,
    AvatarWrapper,
    AuthWrapper,
    MenuWrapper
} from "./Navbar.style";

const Navbar = ({
    className,
    logo,
    avatar,
    user,
    navMenu,
    authMenu,
    profileMenu,
    isLogin,
    isLogout,
    headerType,
    searchVisibility
}) => {

    const addAllClasses = ["navbar"]
    const router = useRouter();

    return (
        <NavbarWrapper className={addAllClasses.join(" ")}>
            {logo || searchVisibility ? (
                <LogoArea>
                    {logo}
                </LogoArea>
            ) : null}
            <MenuArea>
                {navMenu && <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>}
                {user && isLogin && avatar && (user.image_profil_url || user.avatarCurrentMode) ? (
                    <AvatarWrapper>{profileMenu}</AvatarWrapper>
                ) : (
                    authMenu && !isLogin && (
                        <AuthWrapper className="auth_menu">{authMenu}</AuthWrapper>
                    )
                )}
            </MenuArea>
        </NavbarWrapper>
    )
}

export default Navbar;