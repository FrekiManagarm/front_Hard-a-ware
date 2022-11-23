import { createStyles } from "@mantine/core";

const useRAMStyles = createStyles((theme) => ({
    wrapper: {
        padding: "5rem 4rem",
        display: "flex",
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

export default useRAMStyles;