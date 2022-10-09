import { createStyles } from "@mantine/core";

const useHeaderStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '75%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        borderRadius: 20,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
        transition: "background-color 0.5s ease",
    
        [theme.fn.smallerThan('sm')]: {
          height: 42,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },
    
        ...theme.fn.hover({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.blue[6],
        }),
      },
    
      subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,
    
        ...theme.fn.hover({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),
    
        '&:active': theme.activeStyles,
      },

      box: {
        color: "black"
      },

      anchor: {
        textDecoration: "none",
        textAlign: "left",
        color: "black",
        fontWeight: 800,
        borderRadius: "1rem",
        margin: "0.5rem 0",
        padding: "1rem",
        cursor: "pointer",
        transition: "background-color 0.5s ease",

        "&:hover": {
          backgroundColor: theme.colors.gray[3],
        }
      },

      anchor2: {
        backgroundColor: theme.colors.red,
        fontWeight: 800,
        borderRadius: "1rem",
        margin: "0.5rem 0",
        padding: "1rem",
        cursor: "pointer",
        transition: "background-color 0.5s ease",
      },
    
      dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
      },

      button: {
        borderRadius: 25
      },
    
      hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
      },
    
      hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      },
}))

export default useHeaderStyles