import React, {useContext, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  Header as HeaderComponent,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Paper,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Transition,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
  Avatar
} from '@mantine/core';
import { useDisclosure, useClickOutside, useWindowScroll } from '@mantine/hooks';
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown, IconSun, IconMoonStars } from '@tabler/icons';
import useHeaderStyles from './Header.style';
import { AuthContext } from '../../../context/AuthProvider';

const mockData = [
  {
    icon: IconCode,
    title: "Processeur",
    link: "/components/cpu"
  },
  {
    icon: IconCoin,
    title: "Carte Graphique",
    link: "/components/gpu"
  },
  {
    icon: IconBook,
    title: "Mémoire Vive",
    link: "/components/ram"
  },
  {
    icon: IconFingerprint,
    title: "Refroidissement",
    link: "/components/cooling"
  },
  {
    icon: IconChartPie3,
    title: "Boitiers",
    link: "/components/case"
  },
  {
    icon: IconNotification,
    title: "Cartes Mère",
    link: "/components/motherboard"
  },
  {
    icon: IconNotification,
    title: "Alimentation",
    link: "/components/psu"
  },
  {
    icon: IconNotification,
    title: "Disque Dur",
    link: "/components/hdd"
  },
  {
    icon: IconNotification,
    title: "SSD",
    link: "/components/ssd"
  },
]


const Header = ({ user, isLoggedIn }) => {

  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [ scroll, scrollTo ] = useWindowScroll();
  const [open, setOpen] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpen(false));
  const { logOut } = useContext(AuthContext)

  const { classes, theme } = useHeaderStyles();
  
  const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  }

  const bgNavbar = scroll.y > 10 && router.pathname == "/" ? "orange" : scroll.y < 10 && router.pathname == "/" ? "transparent" : "orange"

  const links = mockData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title} onClick={() => router.push(item.link)} >
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md" >
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <HeaderComponent height={65} sx={{ backgroundColor: bgNavbar, border: "none", position: "fixed"}} px="sm" >
        <Group position='apart' sx={{ height: "100%" }}>
          <Image src="https://i.imgur.com/9kR20Nx.png" onClick={() => router.push('/')} style={{ cursor: 'pointer' }} height={45} width={45} alt="header-logo" />

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <HoverCard width={600} position='bottom' radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href='/components' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5} sx={{ color: "white", fontSize: "20px", fontWeight: 800 }}>
                      Composants
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position='apart' px="md">
                  <Text weight={500}>Composants</Text>
                  <Anchor href='/components' size="xs">
                    Voir tout
                  </Anchor>
                </Group>

                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                <SimpleGrid cols={3} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Commencer une configuration
                      </Text>
                      <Text size="xs" color="dimmed">
                        Profitez de notre configurateur dès maintenant
                      </Text>
                    </div>
                    <Button onClick={() => router.push('/configurator')} variant="default">Commencer</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href='/configurator' className={classes.link} style={{ fontSize: "20px", fontWeight: 800, color: "white" }}>
              Configurator
            </a>
          </Group>
          { !isLoggedIn ? <Group className={classes.hiddenMobile}>
            <Button className={classes.button} onClick={() => router.push('/login')}>Connexion</Button>
          </Group> : 
          <>
            <Button className={classes.hiddenMobile} sx={{ height: "3rem", backgroundColor: "transparent" }} size="sm" radius="xl" px="xs" onClick={() => setOpen(!open)}>
              <Avatar radius="xl" size="md" src={isLoggedIn && user ? user.avatar_url : null} sx={{ border: "2px solid white" }} />
              <IconChevronDown />
            </Button>
            <Transition mounted={open} transition={scaleY} duration={200} timingFunction="ease">
              {(styles) => (
                <Paper
                  shadow="md"
                  style={{ ...styles, display: "flex", flexDirection: "column", position: 'absolute', width: "15rem", height: "20rem", top: "4rem", right: "2rem", padding: "1rem"}}
                  ref={clickOutsideRef}
                >
                  <span onClick={() => router.push('/dashboard')} className={classes.anchor}>
                    Mon Tableau de Bord
                  </span>
                  <span onClick={() => {
                    logOut()
                  }} className={classes.anchor2} style={{ backgroundColor: theme.colors.red, color: "white" }} >
                    Déconnexion
                  </span>
                </Paper>
              )}
            </Transition>
          </>
          }

          {/* <Group className={classes.hiddenMobile}>
            <Switch 
              checked={colorScheme === "dark"}
              onChange={() => toggleColorScheme()}
              size="lg"
              onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
              offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
            />
          </Group> */}

          <Burger className={classes.hiddenDesktop} color="white" opened={drawerOpened} onClick={toggleDrawer} />
        </Group>
      </HeaderComponent>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: '100vh' }}>
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="/" className={classes.link}>
            Accueil
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Composants
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="/configurator" className={classes.link}>
            Configurateur
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button radius="xl" >Connexion</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default Header