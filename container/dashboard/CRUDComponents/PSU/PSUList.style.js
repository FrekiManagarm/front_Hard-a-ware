import { createStyles } from "@mantine/core";

const usePSUStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default usePSUStyles