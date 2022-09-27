import { Navbar, Group, Code } from '@mantine/core'
import React from 'react'
import useDashboardStyles from '../../container/dashboard/Dashboard.style'
import Image from 'next/image'
import { IconSwitchHorizontal, IconLogout } from '@tabler/icons'

const DashBoard = () => {

  const { classes } = useDashboardStyles();

  return (
    <div>
      <Navbar height="100vh" style={{
        backgroundColor: "orange"
      }} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
            <Group className={classes.header} position="apart">
            <Image src="https://i.imgur.com/9kR20Nx.png" height={35} width={35} alt="header-logo" />
            </Group>
            {/* {links} */}
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
              <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
              <span style={{ color: "white" }}>Change account</span>
            </a>

            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span style={{ color: "white" }}>Logout</span>
            </a>
          </Navbar.Section>
        </Navbar>
    </div>
  )
}

export default DashBoard