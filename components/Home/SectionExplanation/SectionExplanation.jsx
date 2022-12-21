import Image from 'next/image'
import React from 'react'
import useSectionExplanationStyles from './SectionExplanation.style'
import { LottieAnimation } from 'react-lottie-tools'

const SectionExplanation = ({ animation, text, imageExpl, direction, justifyContent, title }) => {

    const { classes } = useSectionExplanationStyles();

  return (
    <div style={{
        display: "flex",
        justifyContent: justifyContent
    }}>
        <h3>{title}</h3>
        <div className={classes.wrapper} style={{
            flexDirection: direction
        }}>
            <div className={classes.textSection}>
                {text}
            </div>
            <div className={classes.imageSection}>
                <LottieAnimation 
                    autoplay
                    loop
                    animation={animation}
                    style={{
                        width: "30vw",
                        height: "30vw"
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default SectionExplanation