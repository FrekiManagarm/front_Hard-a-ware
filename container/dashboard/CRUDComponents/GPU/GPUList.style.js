import { createStyles } from "@mantine/core";

const useGPUListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}));

export default useGPUListStyles

