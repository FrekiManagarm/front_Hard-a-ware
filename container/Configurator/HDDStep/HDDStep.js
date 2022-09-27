import { Button } from '@mantine/core';
import React from 'react'
import useHDDStepStyles from './HDDStep.style'

const HDDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useHDDStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Disque Dur</h3>
      <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default HDDStep