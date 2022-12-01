import { createStyles } from "@mantine/core";

const useNavbarStyles = createStyles((theme, _params, getRef) => {
    

    const icon = getRef("icon");
return {
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    textDecoration: "none",
    margin: "1rem 0",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.dark,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.lg,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${icon}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.black,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.black })
        .color,
      [`& .${icon}`]: {
        color: theme.fn.variant({
          variant: "light",
          color: theme.black,
        }).color,
      },
    },
  },

  linkIcon: {
    ref: icon,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.dark,
    marginRight: theme.spacing.sm,

    [theme.fn.smallerThan('sm')]: {
      marginRight: 0
    }
  },

  linksWrapper: {
    paddingTop: "5rem"
  },
}});

export default useNavbarStyles;
