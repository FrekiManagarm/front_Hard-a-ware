import { Button } from '@mantine/core';
import React from 'react'
import useGPUStepStyles from './GPUStep.style'

const GPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useGPUStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Carte Graphique</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)} >Etape Suivante</Button>
    </div>
  )
}

export default GPUStep