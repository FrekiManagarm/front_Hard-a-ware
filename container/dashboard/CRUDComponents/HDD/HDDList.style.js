import { createStyles } from "@mantine/core";

const useHDDListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}));

export default useHDDListStyles