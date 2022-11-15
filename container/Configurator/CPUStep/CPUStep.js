import { Button, SimpleGrid } from '@mantine/core';
import React, { useContext } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useCPUStepStyles from './CPUStep.style';

const CPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes, theme } = useCPUStepStyles();
  console.log(data, 'data cpu');
  const { config, setConfig } = useContext(ConfigurationContext);

  console.log(config, 'config');

  return (
    <div className={classes.wrapper}>
        <h3>Etape Processeur</h3>
        <SimpleGrid cols={4} spacing="xl">
          {data && data?.data.map((cpu) => {
            return (
            <ProductCard 
              title={cpu.nom} 
              image={cpu.image} 
              link={cpu.link} 
              description={cpu.description} 
              type="processeur"
              item={cpu}
              cat="processeur"
            />
          )})}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)} >Etape précédente</Button>
          <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
        </div>
    </div>
  )
}

export default CPUStep