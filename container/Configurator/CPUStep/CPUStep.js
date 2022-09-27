import { Button } from '@mantine/core';
import React from 'react'
import useCPUStepStyles from './CPUStep.style'

const CPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCPUStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Processeur</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default CPUStep