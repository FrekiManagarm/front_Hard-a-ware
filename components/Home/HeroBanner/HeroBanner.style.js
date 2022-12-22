import { createStyles } from "@mantine/core";

const useHeroBannerStyles = createStyles((theme) => ({
  hero: {
    // borderRadius: "1rem",
    position: "relative",
    // margin: "0.5rem",
    margin: theme.spacing.xs,
    borderRadius: theme.spacing.xl,
    backgroundImage:
      "url(https://i.imgur.com/9bNON4B.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("sm")]: {
      height: "100vh"
    },
  },

  notification: {
    width: "50vw",
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    fontWeight: "bold",

    [theme.fn.smallerThan("sm")]: {
      width: "80vw"
    }
  },

  container: {
    height: "78vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  
}));

export default useHeroBannerStyles