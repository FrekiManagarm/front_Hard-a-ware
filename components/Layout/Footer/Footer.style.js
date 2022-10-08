import { createStyles } from "@mantine/core";

const useFooterStyles = createStyles((theme) => ({
    footer: {
        width: "100vw",
        bottom: 0,
        marginTop: 50,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
      },
    
      inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    
        [theme.fn.smallerThan('sm')]: {
          flexDirection: 'column',
        },
      },
    
      links: {
        [theme.fn.smallerThan('sm')]: {
          marginTop: theme.spacing.lg,
          marginBottom: theme.spacing.sm,
        },
      },
}))

export default useFooterStyles