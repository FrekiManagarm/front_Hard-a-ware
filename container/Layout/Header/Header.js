import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from 'next/image';
import { Grid, Link as NextLink, Spacer } from '@nextui-org/react';
import Sticky from "react-stickynode";
import { Avatar, Button, Dropdown, Text } from "@nextui-org/react";
import HeaderWrapper, {
    MobileNavbar,
    CloseDrawer,
    AvatarImage,
    AvatarInfos,
    AvatarWrapper,
    LogoArea,
    Navbar,
    NavbarLeftSide,
    NavbarRightSide
} from "./Header.style";
import { getDeviceType } from '../../../helpers/get_device_type';


const Header = ({ isLoggedIn, user }) => {

    return (
        <Sticky>
        <Grid.Container>
            <Grid xs={6} justify="space-around" css={{ padding: "$7" }}>
                <Link href="/">
                    <a>
                    <Image
                        src="https://i.imgur.com/9kR20Nx.png"
                        width="35"
                        height="35"
                        alt="hardshop_logo"
                        style={{
                        borderRadius: "100%",
                        }}
                    />
                    </a>
                </Link>
            </Grid>
            <Grid xs={6} justify="space-around" css={{ padding: "$7" }}>
            <>
                {isLoggedIn && user ? (
                <div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Avatar
                            src={user?.avatar_url}
                            size="lg"
                            as="button"
                            color="secondary"
                            />
                        </Dropdown.Trigger>
                        <Dropdown.Menu aria-label="Avatar Actions">
                            {isLoggedIn ? <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Connecté en tant que :
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    {user?.email}
                                </Text>
                            </Dropdown.Item> : <Text>Connectez-vous !</Text>}
                            <Dropdown.Item key="settings" withDivider>
                                <Link href="/account-settings">
                                    <a>Paramètres</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link>
                                    <a>DashBoard</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                            withDivider
                            color="error"
                            key="logout"
                            >Déconnexion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                ) : (
                <Grid.Container className="woLogIn">
                    <Grid xs={6} justify="space-evenly">
                        <Button size="sm" color="secondary">
                            <Link href="/login">
                                <a>
                                    Connexion
                                </a>
                            </Link>
                        </Button>
                    </Grid>
                    <Grid xs={6} justify="space-evenly">
                        <Button size="sm" color="secondary">
                            <Link href="/registration">
                                <a>
                                    Inscription
                                </a>
                            </Link>
                        </Button>
                    </Grid>
                </Grid.Container>
                )}
            </>
            </Grid>
        </Grid.Container>
      </Sticky>
    );
}

export default Header