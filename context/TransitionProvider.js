import gsap from "gsap";
import { useState, createContext, useCallback } from "react";

const TransitionContext = createContext({});

const TransitionProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));
    const [background, setBackground] = useState("white")

    return (
        <TransitionContext.Provider
            value={{
                timeline,
                setTimeline,
                background,
                setBackground
            }}
        >
            {children}
        </TransitionContext.Provider>
    )
}

export { TransitionContext, TransitionProvider }