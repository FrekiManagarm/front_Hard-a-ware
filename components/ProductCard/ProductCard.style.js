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
      boxShadow: "4px 4px 14px 3px rgba(0,0,0,0.4)"
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

  modalWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },

  interWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  infosWrapper: {
    width: "50%",
    backgroundColor: "orange",
    color: "white",
    padding: "1rem",
    borderRadius: "1rem",
    
    "span": {
      fontWeight: "bold"
    }
  },

  infosButtonsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    

    "button": {
      height: "25%",
      borderRadius: "1rem",
      margin: "1rem"
    },

    "a": {
      height: "25%",
      borderRadius: "1rem",
      margin: "1rem"
    }
  }
}));

export default useProductCardStyles;
