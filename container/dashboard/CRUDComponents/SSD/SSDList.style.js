import { createStyles } from "@mantine/core";

const useSSDListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default useSSDListStyles