import { createStyles } from "@mantine/core";

const useDashboardStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    wrapper: {
      display: "flex",
      flexDirection: "row",
      background: "orange",
      alignItems: "center",
      height: "100vh",
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    navbar: {
      background: "rgba(217, 217, 217, 0.8)",
      boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.15)",
      borderRadius: "0 1.5rem 1.5rem 0",
      border: "none",
      
      
      [theme.fn.largerThan('sm')]: {
        display: "none"
      }
    },
    
  };
});

export default useDashboardStyles;
