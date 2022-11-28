import { AppShell, Burger, Header, MediaQuery } from '@mantine/core'
import { useContext, useState } from 'react'
import Error from 'next/error'
import useDashboardStyles from '../../container/dashboard/Dashboard.style'
import { useRouter } from 'next/router'
import PersonnalInformations from "../../container/dashboard/account-settings/PersonnalInformations/PersonnalInformations"
import Preferences from "../../container/dashboard/account-settings/Preferences/Preferences"
import MyConfigs from '../../container/dashboard/Configs/MyConfigs'
import HomeDashboard from '../../container/dashboard/HomeDashboard'
import { withData } from '../../helpers/restriction'
import CRUDComponents from '../../container/dashboard/CRUDComponents/CRUDComponents'
import { AuthContext } from '../../context/AuthProvider'
import GetAPIData from '../../helpers/get_api_data'
import NavbarDashboard from '../../components/Dashboard/Navbar/Navbar'

const DashBoard = ({ isLoggedIn, user }) => {

  const { classes, cx, theme } = useDashboardStyles();
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { query } = router;
  const { logOut } = useContext(AuthContext)

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
      return <HomeDashboard user={user} />
    }
  }

  // const linksMobile = mockData.map((item) => (
  //   <a
  //     className={cx(classes.link, { [classes.linkActive]: item.link === router.asPath })}
  //     href={item.link}
  //     key={item.label}
  //     onClick={() => {
  //       router.push(item.link)
  //     }}
  //   >
  //     <item.icon className={classes.linkIcon} stroke={1.5} />
  //   </a>
  // ))

  return (
    <div className={classes.wrapper}>
      {/* <Navbar height="100vh" style={{
        background: "rgba(217, 217, 217, 0.8)",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.35)",
        borderRadius: "0 0.75rem 0.75rem 0",
        border: "none"
      }} width={{ sm: 300 }} hidden hiddenBreakpoint="sm" p="md">
        <Navbar.Section grow>
            <a href='/'>
              <Image src="/Hard-A-ware_logo.png" style={{ borderRadius: "1rem" }} height={45} width={45} alt="header-logo" />
            </a>
            <div className={classes.linksWrapper}>
              {links}
            </div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>

            <a className={classes.link} onClick={() => logOut()}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Déconnexion</span>
            </a>
          </Navbar.Section>
        </Navbar>
        <Navbar
          className={classes.navbar}
          height="100vh"
          width={{ base: 80 }}
          p="md"
        >
          <Navbar.Section grow>
            <Link href='/'>
              <Image src="/Hard-A-ware_logo.png" style={{ borderRadius: "1rem" }} height={45} width={45} alt="header-logo" />
            </Link>
            <div className={classes.linksWrapper}>
              {linksMobile}
            </div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>

            <a className={classes.link} onClick={() => logOut()}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
            </a>
          </Navbar.Section>
        </Navbar> */}
        <AppShell
          navbar={<NavbarDashboard user={user} opened={opened} setOpened={setOpened} />}
          navbarOffsetBreakpoint="sm"
          header={
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger 
                      opened={opened}
                      onClick={() => setOpened(!opened)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                </div>
              </Header>
            </MediaQuery>
          }
        >
          {displayComponent()}
        </AppShell>
    </div>
  )
}

DashBoard.getInitialProps = async (ctx) => {
    const { isLoggedIn, user, token } = await withData(ctx);
    const { pathname, res, query, asPath} = ctx

    const apiUrl = [
      {
        endpoint: `${process.env.SERVER_API}/api/my-configs`,
        name: "myConfigs"
      }
    ];

    const responseApi = await GetAPIData(apiUrl, "fr", token);

    const pageData = responseApi;

    let isProtectedRoute = [
      `/components-list`
    ].includes(pathname);

    if (isLoggedIn && user.is_Admin == 0 && isProtectedRoute && res) {
      res.writeHead(302, {
        Location: `${process.env.LOCAL_FRONT_SERVER}/dashboard`
      });
      res.end();
    }

    return { isLoggedIn, user, pageData }
}

export default DashBoard;