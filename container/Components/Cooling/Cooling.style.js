import { createStyles } from "@mantine/core";

const useCoolingStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        padding: "5rem",
        flexDirection: "column",
        alignItems: "center"
    },

    cardSection: {
        paddingTop: "4rem"
    }
}))

export default useCoolingStyles;