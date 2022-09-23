import gsap from "gsap";    
import { TransitionContext } from "../../../context/TransitionProvider";
import { useState, useContext, useRef } from "react";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const { timeline, background } = useContext(TransitionContext);
    const el = useRef();

    useIsomorphicLayoutEffect(() => {
        if (children !== displayChildren) {
            if (timeline.duration() === 0) {
                setDisplayChildren(children)
            } else {
                timeline.play().then(() => {
                    timeline.seek(0).pause().clear()
                    setDisplayChildren(children)
                })
            }
        }
    }, [children])

    useIsomorphicLayoutEffect(() => {
        gsap.to(el.current, {
            background,
            duration: 1
        })
    }, [background])

    return <div ref={el}>{displayChildren}</div>
}
