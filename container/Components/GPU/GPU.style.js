import { createStyles } from "@mantine/core";

const useGPUStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        padding: "5rem",
        alignItems: "center"
    },

    cardSection: {
        paddingTop: "4rem",
    }
}))

export default useGPUStyles