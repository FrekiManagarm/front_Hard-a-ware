import { createStyles } from "@mantine/core";

const useSSDStepStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonsWrapper: {
        display: "flex",
        marginTop: "2rem"
    },

    button: {
        borderRadius: "2rem",
        margin: "2rem"
    }
}))

export default useSSDStepStyles