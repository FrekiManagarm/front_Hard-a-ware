import { Button } from '@mantine/core';
import React from 'react'
import usePSUStepStyles from './PSUStep.style'

const PSUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = usePSUStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Alimentation</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default PSUStep