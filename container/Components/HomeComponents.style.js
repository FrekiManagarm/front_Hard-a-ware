import { createStyles } from "@mantine/core";

const useHomeComponentsStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
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
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: "bold",
    fontSize: "20px"
  },

  image: {
    borderRadius: "1rem",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.lg,
    height: 300,
    width: 500,

    [theme.fn.smallerThan('sm')]: {
        height: 250,
        width: 425
    },

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[5],
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.xl} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default useHomeComponentsStyles;
