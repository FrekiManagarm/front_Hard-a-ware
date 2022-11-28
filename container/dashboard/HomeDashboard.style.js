import { createStyles } from "@mantine/core";

const useHomeDashboardStyles = createStyles((theme) => ({
    wrapper: {
        // margin: "5rem 10rem",
        padding: "5rem 10rem",
        display: "flex",
        flexDirection: "row",

        [theme.fn.smallerThan('xl')]: {
            padding: "5rem 1rem"
        },

        [theme.fn.smallerThan('lg')]: {
            display: "none"
        },

        [theme.fn.smallerThan('md')]: {
            display: "none"
        },

        [theme.fn.smallerThan('sm')]: {
            display: "none"
        },

        [theme.fn.smallerThan('xs')]: {
            display: "none"
        }
    },

    column1: {

    },

    column2: {

    },

    column3: {

    }
}))

export default useHomeDashboardStyles