import { createStyles } from "@mantine/core";

const useRAMListStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },
}))

export default useRAMListStyles