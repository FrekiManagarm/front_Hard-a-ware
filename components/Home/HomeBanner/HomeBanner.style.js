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

  card: {
    margin: theme.spacing.xs,
    position: "relative",
    height: "78vh",
    background: "lightgrey",
    boxShadow: "#d11bff42 0 15px 40px -5px",
    zIndex: "1",
    borderRadius: theme.spacing.xl,
    overflow: "hidden",

    [theme.fn.smallerThan("sm")]: {
      height: "100vh"
    },
  },

  card_content: {
    background: "linear-gradient(rgba(255, 255, 255, 0.473), rgba(150, 150, 150, 0.25))",
    zIndex: "1",
    backdropFilter: "blur(20px)",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing.xl
  },

  blob: {
    position: "absolute",
    zIndex: "-1",
    borderRadius: "100rem",
    width: "100rem",
    height: "100rem"
  },

  blob1: {
    left: "-150px",
    top: "-90px",
    background: "#ff930f"
  },

  blob2: {
    left: "200px",
    top: "-20px",
    background: "#bf0fff"
  },

  blob3: {
    left: "-4rem",
    top: "100px",
    background: "#ff1b6b"
  },

  blob4: {
    left: "50rem",
    top: "210px",
    background: "#0061ff"
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