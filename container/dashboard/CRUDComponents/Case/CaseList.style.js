import { createStyles } from "@mantine/core";

const useCaseListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default useCaseListStyles;