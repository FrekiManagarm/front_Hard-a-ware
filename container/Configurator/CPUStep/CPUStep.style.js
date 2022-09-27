import { createStyles } from "@mantine/core";

const useCPUStepStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    button : {
        borderRadius: "2rem"
    },

    buttonsWrapper : {
        marginTop: "1rem",
        justifyContent: "space-around"
    }
}))

export default useCPUStepStyles