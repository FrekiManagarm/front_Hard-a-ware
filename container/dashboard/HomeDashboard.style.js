import { createStyles } from "@mantine/core";

const useHomeDashboardStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        margin: "0 10rem",
        flexDirection: "row",

        [theme.fn.smallerThan('lg')]: {
            margin: "3rem"
        },

        [theme.fn.smallerThan('md')]: {
            margin: "3rem"
        },

        [theme.fn.smallerThan('sm')]: {
            margin: "3rem 9rem"
        },

        [theme.fn.smallerThan('xs')]: {
            margin: "2rem"
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