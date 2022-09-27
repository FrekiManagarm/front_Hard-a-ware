import { createStyles } from "@mantine/core";

const useCaseStepStyles = createStyles((theme) => ({
    wrapper : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    buttonsWrapper : {
        display: "flex",
        marginTop: "2rem",
    },

    button: {
        borderRadius: "2rem",
        margin: "1rem"
    }
}))

export default useCaseStepStyles