import { useRef, useContext } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
import { TransitionContext } from "../../context/TransitionProvider";

const HomeAnimation = () => {
    const { timeline } = useContext(TransitionContext);
    const greensockRef = useRef();
    const plusRef = useRef();
    const nextJsRef = useRef();
    
    useIsomorphicLayoutEffect(() => {
        gsap.to(greensockRef.current, {
            opacity: 1,
            delay: 3,
            duration: 1,
            y: 0,
            ease: "elastic.out"
        })

        gsap.to(greensockRef.current, {
            opacity: 1,
            rotationY: -720,
            delay: 3,
            duration: 2,
            y: 0,
            transformOrigin: "50% 50%",
            ease: "power4.out"
        })

        gsap.to(nextJsRef.current, {
            opacity: 1,
            delay: 3.2,
            duration: 1,
            y: 0,
            ease: "bounce.out"
        })

        timeline.add(
            gsap.to(greensockRef.current, {
                y: -200,
                opacity: 0,
                duration: 0.25,
                ease: "power4.in"
            }),
            0
        )

        timeline.add(
            gsap.to(plusRef.current, {
              opacity: 0,
              duration: 0.25,
              ease: "power4.in",
            }),
            0
          )
          timeline.add(
            gsap.to(nextJsRef.current, {
              y: 200,
              opacity: 0,
              duration: 0.25,
              ease: "power4.in",
            }),
            0
          )
    }, [])
}