import { createStyles } from "@mantine/core";

const useProductCardStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      transition: "all 0.2s ease-in-out",

      "&:hover": {
        transform: "scale(1.1)",
        cursor: "pointer",
      },
      boxShadow: "4px 4px 14px 3px rgba(0,0,0,0.3)"
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  modal: {
    [theme.fn.smallerThan('sm')]: {
      width: "100vw",
      height: "100vh"
    }
  },

  modalWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.fn.smallerThan('sm')]: {
      flexDirection: "column"
    }
  },

  interWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  infosWrapper: {
    width: "100%",
    backgroundColor: "orange",
    color: "white",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "4px 4px 14px 3px rgba(0,0,0,0.3)",
    
    "span": {
      fontWeight: "bold"
    }
  },

  image: {
    [theme.fn.smallerThan('sm')]: {
      width: 300,
      height: 300
    }
  },

  infosButtonsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    

    "button": {
      borderRadius: "1rem",
      margin: "1rem",
      transition: "all 0.2s ease-in-out",

      "&:hover": {
        boxShadow: "4px 4px 14px 3px rgba(0,0,0,0.3)"
      }
    },

    "a": {
      borderRadius: "1rem",
      margin: "1rem",
      transition: "all 0.2s ease-in-out",

      "&:hover": {
        boxShadow: "4px 4px 14px 3px rgba(0,0,0,0.3)"
      }
    }
  }
}));

export default useProductCardStyles;
