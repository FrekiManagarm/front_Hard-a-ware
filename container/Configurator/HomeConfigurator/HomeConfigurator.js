
import { Button } from '@mantine/core';
import React from 'react'
import useHomeConfiguratorStyles from './HomeConfigurator.style'

const HomeConfigurator = ({ activeStep, setActiveStep }) => {

  const { classes } = useHomeConfiguratorStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Utilisation</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)} >Etape Suivante</Button>
    </div>
  )
}

export default HomeConfigurator