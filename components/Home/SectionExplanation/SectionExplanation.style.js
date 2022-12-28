import { createStyles } from "@mantine/core";

const useSectionExplanationStyles = createStyles((theme) => ({
    wrapper: {
        width: "70vw",
        height: "40vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1rem 12rem",
        borderRadius: "1rem",
    },

    textSection: {
        width: "50%",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "800"
    },

    imageSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        borderRadius: "2rem",
        background: "rgba(222, 222, 222, 0.7)",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.35)",
    }
}));

export default useSectionExplanationStyles;