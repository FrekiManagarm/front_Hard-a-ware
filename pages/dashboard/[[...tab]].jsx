import { Navbar, Group, Code, Anchor } from '@mantine/core'
import React, { useContext } from 'react'
import Error from 'next/error'
import useDashboardStyles from '../../container/dashboard/Dashboard.style'
import Image from 'next/image'
import { IconLogout, IconSettings, IconNotification, IconAffiliate, IconHome, IconList } from '@tabler/icons'
import { useRouter, withRouter } from 'next/router'
import PersonnalInformations from "../../container/dashboard/account-settings/PersonnalInformations/PersonnalInformations"
import Preferences from "../../container/dashboard/account-settings/Preferences/Preferences"
import MyConfigs from '../../container/dashboard/Configs/MyConfigs'
import HomeDashboard from '../../container/dashboard/HomeDashboard'
import { withData } from '../../helpers/restriction'
import CRUDComponents from '../../container/dashboard/CRUDComponents/CRUDComponents'
import { AuthContext } from '../../context/AuthProvider'

const mockDataAdmin = [
  {
    label: "Accueil",
    link: "/dashboard",
    icon: IconHome
  },
  {
    label: "Mes informations perso",
    link: "/dashboard/personnal-informations",
    icon: IconNotification
  },
  {
    label: "Mes Configurations",
    link: "/dashboard/my-configs",
    icon: IconAffiliate
  },
  {
    label: "Mes Préférences",
    link: "/dashboard/preferences",
    icon: IconSettings
  },
  {
    label: "Composants",
    link: "/dashboard/components-list",
    icon: IconList
  }
];

const mockDataNotAdmin = [
  {
    label: "Accueil",
    link: "/dashboard",
    icon: IconHome
  },
  {
    label: "Mes informations perso",
    link: "/dashboard/personnal-informations",
    icon: IconNotification
  },
  {
    label: "Mes Configurations",
    link: "/dashboard/my-configs",
    icon: IconAffiliate
  },
  {
    label: "Mes Préférences",
    link: "/dashboard/preferences",
    icon: IconSettings
  },
]

const DashBoard = ({ isLoggedIn, user }) => {

  const { classes, cx } = useDashboardStyles();
  const router = useRouter();
  const { query } = router;
  const { logOut } = useContext(AuthContext)
  console.log(query, 'query dashboard')

  console.log(user)

  const displayComponent = () => {
    
    if (query.tab && query.tab[0] && !query.tab[1]) {
      switch (query.tab[0]) {
        case "personnal-informations":
          return <PersonnalInformations />
        case "preferences":
          return <Preferences />
        case "my-configs":
          return <MyConfigs />
        case "components-list":
          return user.is_Admin ? <CRUDComponents user={user} /> : <Error statusCode={404} title="Not found" />
        default:
          return <Error statusCode={404} title="Page Non Trouvé" />
      }
    } else {
      return <HomeDashboard />
    }
  }

  const mockData = user?.is_Admin ? mockDataAdmin : mockDataNotAdmin

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
        backgroundColor: "orange",
        borderRadius: "1.5rem",
      }} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
            <a href='/'>
              <Image src="https://i.imgur.com/9kR20Nx.png" height={45} width={45} alt="header-logo" />
            </a>
            <div className={classes.linksWrapper}>
              {links}
            </div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>

            <a className={classes.link} onClick={() => logOut()}>
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
    const { isLoggedIn, user } = await withData(ctx);
    const { pathname, res, query, asPath } = ctx

    let isProtectedRoute = [
      `/components-list`
    ].includes(pathname);

    if (isLoggedIn && user.is_Admin == 0 && isProtectedRoute && res) {
      res.writeHead(302, {
        Location: `${process.env.LOCAL_FRONT_SERVER}/dashboard`
      });
      res.end();
    }

    return { isLoggedIn, user }
}

export default DashBoard