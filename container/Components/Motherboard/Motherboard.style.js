import { createStyles } from "@mantine/core";

const useMotherboardStyles = createStyles((theme) => ({
    wrapper: {
        padding: "5rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        [theme.fn.smallerThan('md')]: {
            padding: "5rem 3rem"
        },
   
        [theme.fn.smallerThan('sm')]: {
            padding: "4rem 3rem"
        }
    },

    cardSection: {
        paddingTop: "4rem"
    }
}))

export default useMotherboardStyles;