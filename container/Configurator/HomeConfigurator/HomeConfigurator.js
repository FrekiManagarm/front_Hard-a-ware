
import { Button } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
import { useToggle } from '@mantine/hooks';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useHomeConfiguratorStyles from './HomeConfigurator.style'

const HomeConfigurator = ({ activeStep, setActiveStep }) => {

  const { classes } = useHomeConfiguratorStyles();
  const [toggleButton1, setToggleButton1] = useState(false);
  const [toggleButton2, setToggleButton2] = useState(false);

  const { config, setConfig } = useContext(ConfigurationContext)

  // console.log(config, 'config du provider')

  // useEffect(() => {
    
  // }, [valueButton1, valueButton2]);

  return (
    <div className={classes.wrapper}>
        <h3>Etape Utilisation</h3>
        <div className={classes.wrapperButtonUse}>
          <Button className={classes.buttonUse1} variant={toggleButton1 ? 'outline' : "filled"} color="violet" onClick={() => {
            setConfig({ ...config, use: 1 });
            setToggleButton1(!toggleButton1)
            setToggleButton2(false)
          }}>Jeu / Gaming</Button>
          <Button color="teal" variant={toggleButton2 ? "outline" : 'filled'} className={classes.buttonUse2} onClick={() => {
            setConfig({ ...config, use: 2 });
            setToggleButton2(!toggleButton2)
            setToggleButton1(false)
          }}>Multi-tâches</Button>
        </div>
        <Button color="green" sx={{ borderRadius: "2rem 0", margin: "2rem 0", width: "80%" }} onClick={() => setActiveStep(activeStep + 1)} >Etape Suivante</Button>
    </div>
  )
}
 
export default HomeConfigurator