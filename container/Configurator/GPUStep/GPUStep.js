import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useGPUStepStyles from './GPUStep.style'

const GPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useGPUStepStyles();
  console.log(data, 'data gpu')

  return (
    <div className={classes.wrapper}>
        <h3>Etape Carte Graphique</h3>
        <SimpleGrid cols={4} spacing="xl">
          {data && data?.data.map((gpu) => (
            <ProductCard title={gpu.nom} description={gpu.description} cat="carte graphique" type="carte_graphique" item={gpu} image={gpu.image} link={gpu.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
        </div>
    </div>
  )
}

export default GPUStep