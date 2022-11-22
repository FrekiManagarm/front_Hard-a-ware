import { createStyles } from "@mantine/core";

const useCPUListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}));

export default useCPUListStyles