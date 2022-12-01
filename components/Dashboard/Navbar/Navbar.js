import React from "react";
import { Button, MediaQuery, Navbar } from "@mantine/core";
import Image from "next/image";
import {
  IconLogout,
  IconHome,
  IconNotification,
  IconAffiliate,
  IconSettings,
  IconList,
  IconCross,
  IconX,
} from "@tabler/icons";
import useDashboardStyles from "../../../container/dashboard/Dashboard.style";
import { useRouter } from "next/router";
import useNavbarStyles from "./Navbar.style";

const mockDataAdmin = [
  {
    label: "Accueil",
    link: "/dashboard",
    icon: IconHome,
  },
  {
    label: "Mes informations perso",
    link: "/dashboard/personnal-informations",
    icon: IconNotification,
  },
  {
    label: "Mes Configurations",
    link: "/dashboard/my-configs",
    icon: IconAffiliate,
  },
  {
    label: "Mes Préférences",
    link: "/dashboard/preferences",
    icon: IconSettings,
  },
  {
    label: "Composants",
    link: "/dashboard/components-list",
    icon: IconList,
  },
];

const mockDataNotAdmin = [
  {
    label: "Accueil",
    link: "/dashboard",
    icon: IconHome,
  },
  {
    label: "Mes informations perso",
    link: "/dashboard/personnal-informations",
    icon: IconNotification,
  },
  {
    label: "Mes Configurations",
    link: "/dashboard/my-configs",
    icon: IconAffiliate,
  },
  {
    label: "Mes Préférences",
    link: "/dashboard/preferences",
    icon: IconSettings,
  },
];

const NavbarDashboard = ({ user, opened, setOpened }) => {
  const mockData = user?.is_Admin ? mockDataAdmin : mockDataNotAdmin;
  const router = useRouter();
  const { classes, cx } = useNavbarStyles();

  const links = mockData.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.link === router.asPath,
      })}
      href={item.link}
      key={item.label}
      onClick={() => {
        router.push(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      height="100vh"
      style={{
        background: "rgba(217, 217, 217, 0.8)",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.35)",
        borderRadius: "0 0.75rem 0.75rem 0",
        border: "none",
      }}
      width={{ sm: 200, lg: 300 }}
      hidden={!opened}
      hiddenBreakpoint="sm"
      p="md"
    >
      <Navbar.Section grow>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <Image
              src="/Hard-A-ware_logo.png"
              style={{ borderRadius: "1rem" }}
              height={45}
              width={45}
              alt="header-logo"
            />
          </a>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Button
              sx={{
                background: "orange",
              }}
              radius="xl"
              p={5}
              onClick={() => setOpened(!opened)}
            >
              <IconX style={{ cursor: "pointer", color: "white" }} />
            </Button>
          </MediaQuery>
        </div>
        <div className={classes.linksWrapper}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a className={classes.link} onClick={() => logOut()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Déconnexion</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarDashboard;
