import { createStyles } from "@mantine/core";

const useMBListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default useMBListStyles