import { createStyles } from "@mantine/core";

const useHomeComponentsStyles = createStyles((theme) => ({
  wrapper: {
    // padding: "4.5rem",
    paddingTop: "4.5rem",
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
    display: "inline-block",
    textAlign: "center",
    position: "relative",
    borderRadius: theme.radius.xl,
    height: 300,
    width: 450,

    [theme.fn.smallerThan('xl')]: {
      height: 300,
      width: "25rem"
    },

    [theme.fn.smallerThan('lg')]: {
      height: 300,
      width: "18rem"
    },

    [theme.fn.smallerThan('sm')]: {
        height: 300,
        width: "17rem"
    },

    [theme.fn.smallerThan('xs')]: {
      height: 300,
      width: "20rem"
    },

    ".seeMore": {
      color: "#FFF",
      width: 450,
      height: 300,
      borderRadius: theme.radius.xl,
      fontSize: "20px",
      fontWeight: "bold",
      background: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      margin: "0 auto",
      padding: "8rem",
      top: 0,
      opacity: 0,
      display: "block",
      position: "absolute",
      transition: "opacity .5s ease-in-out, background .5s ease-in-out",

      [theme.fn.smallerThan('xl')]: {
        height: 300,
        width: "25rem"
      },
  
      [theme.fn.smallerThan('lg')]: {
        height: 300,
        width: "18rem"
      },
  
      [theme.fn.smallerThan('sm')]: {
          height: 300,
          width: "17rem"
      },
  
      [theme.fn.smallerThan('xs')]: {
        height: 300,
        width: "20rem"
      },
    },

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2],
    transition: "box-shadow 150ms ease, filter 150ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.xl} !important`,
      backdropFilter: "blur(5px)"
    },

    "&:hover .seeMore": {
      opacity: 1,
    }
  },
}));

export default useHomeComponentsStyles;
