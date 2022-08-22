import React from 'react'
import Image from 'next/image'
import { Avatar, Button, ConnectButtons, LogoArea, Navbar, NavbarItems, NavbarListItems } from './Header.style'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = ({ user, isLoggedIn }) => {

  const router = useRouter();

  return (
    <Navbar>
        <LogoArea>
          <a href='/'>
            <Image src="https://i.imgur.com/9kR20Nx.png" height="35" width="35" />
          </a>
        </LogoArea>
        <NavbarListItems>
            <NavbarItems>
              <Link href="/">
                Accueil
              </Link>
            </NavbarItems>
            <NavbarItems>
              <Link href="/configurator">
                Configurateur
              </Link>
            </NavbarItems>
            <NavbarItems>
              <Link href="/components">
                Composants
              </Link>
            </NavbarItems>
        </NavbarListItems>
        <ConnectButtons>
            {!isLoggedIn ? (
              <>
                <Button onClick={() => router.push('/login')}>Connexion</Button>
              </>
            ) : (
              <Avatar>Avatar</Avatar>
            )}
        </ConnectButtons>
    </Navbar>
  )
}

export default Header