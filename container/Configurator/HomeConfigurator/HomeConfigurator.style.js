import { createStyles } from "@mantine/core";

const useHomeConfiguratorStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    wrapperButtonUse: {
        display: "flex",
        flexDirection: "row",
    },

    buttonUse1: {
        margin: "1rem",
        borderRadius: "1.5rem",
        width: "45vw",
        height: "70vh",
        fontWeight: "900",
        fontSize: "30px",
    },

    buttonUse2: {
        margin: "1rem",
        borderRadius: "1.5rem",
        width: "45vw",
        height: "70vh",
        fontWeight: "900",
        fontSize: "30px",
    }
}))

export default useHomeConfiguratorStyles