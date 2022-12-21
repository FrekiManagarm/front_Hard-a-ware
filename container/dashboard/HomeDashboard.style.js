import { createStyles } from "@mantine/core";

const useHomeDashboardStyles = createStyles((theme) => ({
    wrapper: {
        marginLeft: 0,
        width: "80vw"
    },

    grid: {
        width: "80vw",

        [theme.fn.smallerThan('lg')]: {
            width: "75vw"
        },

        [theme.fn.smallerThan("xs")]: {
            paddingTop: "48rem",
            width: "85vw"
        }
    }
}))

export default useHomeDashboardStyles