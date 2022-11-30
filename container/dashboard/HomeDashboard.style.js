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
            
        },

        [theme.fn.smallerThan('md')]: {
            
        },

        [theme.fn.smallerThan('sm')]: {
            
        },

        [theme.fn.smallerThan('xs')]: {
            
        }
    },

    column1: {
        [theme.fn.smallerThan('sm')]: {
            display: "none"
        }
    },

    column2: {

    },

    column3: {

    }
}))

export default useHomeDashboardStyles