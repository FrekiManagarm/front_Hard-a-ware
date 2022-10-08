import { createStyles } from "@mantine/core";

const useHomeComponentsStyles = createStyles((theme) => ({
  wrapper: {
    padding: "4.5rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    paddingTop: "15px",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: "bold",
    fontSize: "25px"
  },

  image: {
    borderRadius: "75%",
  },

  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    borderRadius: theme.radius.xl,
    height: 300,
    width: 450,

    [theme.fn.smallerThan('lg')]: {
      height: 250,
      width: 425
    },

    [theme.fn.smallerThan('sm')]: {
        height: 225,
        width: 400
    },

    [theme.fn.smallerThan('xs')]: {
      height: 225,
      width: 350
    },

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2],
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.xl} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default useHomeComponentsStyles;
