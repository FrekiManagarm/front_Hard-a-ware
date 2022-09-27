import React from 'react'
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
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Switch,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown, IconSun, IconMoonStars } from '@tabler/icons';
import useHeaderStyles from './Header.style';

const mockData = [
  {
    icon: IconCode,
    title: "Processeur",
    link: "/components/cpu"
  },
  {
    icon: IconCoin,
    title: "Carte Graphique",
    link: "/components/graphics-card"
  },
  {
    icon: IconBook,
    title: "Mémoire Vive",
    link: "/components/ram"
  },
  {
    icon: IconFingerprint,
    title: "Refroidissement",
    link: "/components/coolings"
  },
  {
    icon: IconChartPie3,
    title: "Boitiers",
    link: "/components/cases"
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
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const theme = useMantineTheme();

  const { classes, theme } = useHeaderStyles();

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
      <HeaderComponent height={65} sx={{ backgroundColor: "orange" }} px="md">
        <Group position='apart' sx={{ height: "100%" }}>
          <Image src="https://i.imgur.com/9kR20Nx.png" height={35} width={35} alt="header-logo" />

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <a href='/' className={classes.link}>
              Accueil
            </a>
            <HoverCard width={600} position='bottom' radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href='/components' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Composants
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position='apart' px="md">
                  <Text weight={500}>Composants</Text>
                  <Anchor href='#' size="xs">
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
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href='/configurator' className={classes.link}>
              Configurator
            </a>
          </Group>
          { !isLoggedIn ? <Group className={classes.hiddenMobile}>
            <Button className={classes.button} variant='default' onClick={() => router.push('/login')}>Connexion</Button>
            <Button className={classes.button} onClick={() => router.push('/registration')} >Inscription</Button>
          </Group> : 
          <Button onClick={() => router.push('/dashboard')}>Profil</Button>}

          {/* <Group className={classes.hiddenMobile}>
            <Switch 
              checked={colorScheme === "dark"}
              onChange={() => toggleColorScheme()}
              size="lg"
              onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
              offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
            />
          </Group> */}

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
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
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default Header