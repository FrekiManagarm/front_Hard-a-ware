import { createStyles } from "@mantine/core";

const useCPUStepStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    button : {
        borderRadius: "2rem",
        margin: "2rem"
    },

    buttonsWrapper : {
        marginTop: "1rem",

        [theme.fn.smallerThan('sm')]: {
            display: "flex"
        }
    }
}))

export default useCPUStepStyles