import { createStyles } from "@mantine/core";

const useGPUStepStyles = createStyles((theme) => ({
    wrapper : {
        display: 'flex',
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
        margin: "1rem"
    }
}))

export default useGPUStepStyles