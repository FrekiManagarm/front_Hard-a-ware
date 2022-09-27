import { Button } from '@mantine/core';
import React from 'react'
import useCoolingStepStyles from './CoolingStep.style'

const CoolingStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCoolingStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Refroidissement</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default CoolingStep