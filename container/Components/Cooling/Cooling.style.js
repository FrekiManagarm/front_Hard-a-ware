import { createStyles } from "@mantine/core";

const useCoolingStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        padding: "5rem 4rem",
        flexDirection: "column",
        alignItems: "center",

        [theme.fn.smallerThan('md')]: {
            padding: "5rem 2rem"
         },
   
         [theme.fn.smallerThan('sm')]: {
            padding: "4rem 3rem"
         }
    },

    cardSection: {
        paddingTop: "4rem"
    }
}))

export default useCoolingStyles;