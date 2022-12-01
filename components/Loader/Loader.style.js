import { createStyles, keyframes } from '@mantine/core'

const scale = keyframes({
    '0%, 40%, 100%': { transform: "scaleY(0.05)" },
    '20%': {transform: "scaleY(1)"}
})

const useLoaderStyles = createStyles((theme) => ({
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        gap: "6px",
        height: "100px"
    },

    span: {
        width: "4px",
        height: "50px",
        animation: `${scale} 0.9s ease-in-out infinite`
    },

    span1: {
        background: "#4c86f9",
        animationDelay: "-0.9s"
    },

    span2: {
        background: "#49a84c",
        animationDelay: "-0.8s"
    },

    span3: {
        background: "#f6bb02",
        animationDelay: "-0.7s"
    },

    span4: {
        background: "#f6bb02",
        animationDelay: "-0.6s"
    },

    span5: {
        background: "#2196f3",
        animationDelay: "-0.5s"
    }
}))

export default useLoaderStyles
// .loading {
//   --speed-of-animation: 0.9s;
//   --first-color: #4c86f9;
//   --second-color: #49a84c;
//   --third-color: #f6bb02;
//   --fourth-color: #f6bb02;
//   --fifth-color: #2196f3;
// }

// .loading span {
//     width: 4px;
//     height: 50px;
//     background: var(--first-color);
//     animation: scale var(--speed-of-animation) ease-in-out infinite;
// }

// .loading span:nth-child(2) {
//     background: var(--second-color);
//     animation-delay: -0.8s;
// }

// .loading span:nth-child(3) {
//     background: var(--third-color);
//     animation-delay: -0.7s;
// }

// .loading span:nth-child(4) {
//     background: var(--fourth-color);
//     animation-delay: -0.6s;
// }

// .loading span:nth-child(5) {
//     background: var(--fifth-color);
//     animation-delay: -0.5s;
// }

// @keyframes scale {
//     0%, 40%, 100% {
//         transform: scaleY(0.05);
//     }

//     20% {
//         transform: scaleY(1);
//     }
// }
