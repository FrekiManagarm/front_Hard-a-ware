
import { Button } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useHomeConfiguratorStyles from './HomeConfigurator.style'

const HomeConfigurator = ({ activeStep, setActiveStep }) => {

  const { classes } = useHomeConfiguratorStyles();

  const { config, setConfig } = useContext(ConfigurationContext)

  return (
    <div className={classes.wrapper}>
        <h3>Etape Utilisation</h3>
        <div className={classes.wrapperButtonUse}>
          <Button className={classes.buttonUse1} color="violet" onClick={() => {
            setConfig({ ...config, use: 1 });
          }} >Jeu / Gaming</Button>
          <Button color="teal" className={classes.buttonUse2} onClick={() => {
            setConfig({ ...config, use: 2 });
          }} >Multi-tâches</Button>
        </div>
        <Button color="green" sx={{ borderRadius: "2rem 0", margin: "2rem 0", width: "80%" }} onClick={() => setActiveStep(activeStep + 1)} >Etape Suivante</Button>
    </div>
  )
}

export default HomeConfigurator