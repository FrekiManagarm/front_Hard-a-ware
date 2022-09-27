import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useCPUStepStyles from './CPUStep.style'

const CPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes, theme } = useCPUStepStyles();
  console.log(data, 'data cpu')

  return (
    <div className={classes.wrapper}>
        <h3>Etape Processeur</h3>
        <SimpleGrid cols={4}>
          {data && data?.data.map((cpu) => (
            <ProductCard title={cpu.nom} image={cpu.image} link={cpu.link} country="processeur" />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)} >Etape précédente</Button>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
        </div>
    </div>
  )
}

export default CPUStep