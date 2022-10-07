import { Global } from "@mantine/core";

function GlobalStyles() {
    return <Global 
        styles={(theme) => ({
            '*, *::before, *::after': { boxSizing: 'border-box' },
        })}
    />
}

export default GlobalStyles