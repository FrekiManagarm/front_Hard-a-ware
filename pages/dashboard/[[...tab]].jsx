import { Navbar, Group, Code } from '@mantine/core'
import React from 'react'
import Error from 'next/error'
import useDashboardStyles from '../../container/dashboard/Dashboard.style'
import Image from 'next/image'
import { IconSwitchHorizontal, IconLogout, IconSettings } from '@tabler/icons'
import { useRouter } from 'next/router'
import PersonnalInformations from "../../container/dashboard/account-settings/PersonnalInformations/PersonnalInformations"
import Preferences from "../../container/dashboard/account-settings/Preferences/Preferences"
import MyConfigs from '../../container/dashboard/Configs/MyConfigs'
import HomeDashboard from '../../container/dashboard/HomeDashboard'
import { withData } from '../../helpers/restriction'

const mockData = [
  {
    label: "Mes informations perso",
    link: "/dashboard/personnal-informations",
    icon: IconSettings
  },
  {
    label: "Mes Configurations",
    link: "/dashboard/my-configs",
    icon: IconSettings
  },
  {
    label: "Mes Préférences",
    link: "/dashboard/preferences",
    icon: IconSettings
  }
];

const DashBoard = ({ isLoggedIn, user }) => {

  const { classes, cx } = useDashboardStyles();
  const router = useRouter();
  const { query } = router;
  console.log(query, 'query dashboard')

  const displayComponent = () => {
    
    if (query.tab && query.tab[0] && !query.tab[1]) {
      switch (query.tab[0]) {
        case "personnal-informations":
          return <PersonnalInformations />
        case "preferences":
          return <Preferences />
        case "my-configs":
          return <MyConfigs />
        default:
          return <Error statusCode={404} title="Page Non Trouvé" />
      }
    }

    if (query.tab && !query.tab[0]) {
      return <HomeDashboard />
    }
  }

  const links = mockData.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.link === router.asPath })}
      href={item.link}
      key={item.label}
      onClick={() => {
        router.push(item.link)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <div className={classes.wrapper}>
      <Navbar height="100vh" style={{
        backgroundColor: "orange"
      }} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
            <Group className={classes.header} position="apart">
              <a href='/'>
                <Image src="https://i.imgur.com/9kR20Nx.png" height={45} width={45} alt="header-logo" />
              </a>
            </Group>
            {links}
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>

            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
          </Navbar.Section>
        </Navbar>
        <div>
          {displayComponent()}
        </div>
    </div>
  )
}

DashBoard.getInitialProps = async (ctx) => {
    const { isLoggedIn, user } = await withData(ctx)

    return { isLoggedIn, user }
}

export default DashBoard