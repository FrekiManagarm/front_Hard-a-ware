import { createStyles } from "@mantine/core";

const useTabStyle = createStyles((theme) => ({
    root: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        boxShadow: theme.shadows.md,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
        }`,
      },
    
      active: {
        backgroundImage: theme.fn.gradient({ from: 'pink', to: 'orange' }),
      },
    
      control: {
        border: '0 !important',
      },
    
      labelActive: {
        color: `${theme.white} !important`,
      },
}))

export default useTabStyle