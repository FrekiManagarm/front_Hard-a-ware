import { Button } from '@mantine/core';
import React from 'react'
import useSSDStepStyles from './SSDStep.style'

const SSDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useSSDStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape SSD</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default SSDStep