import { createStyles } from "@mantine/core";

const useCoolingListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default useCoolingListStyles