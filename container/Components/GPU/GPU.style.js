import { createStyles } from "@mantine/core";

const useGPUStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        padding: "5rem",
        alignItems: "center",

        [theme.fn.smallerThan('md')]: {
            padding: "5rem 2rem"
         },
   
         [theme.fn.smallerThan('sm')]: {
            padding: "4rem 2rem"
         }
    },

    cardSection: {
        paddingTop: "4rem",
    }
}))

export default useGPUStyles