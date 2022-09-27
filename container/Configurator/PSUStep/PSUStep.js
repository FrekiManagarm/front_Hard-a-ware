import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import usePSUStepStyles from './PSUStep.style'

const PSUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = usePSUStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Alimentation</h3>
        <SimpleGrid cols={4}>
          {data && data?.data.map((psu) => (
            <ProductCard title={psu.nom} image={psu.image} link={psu.link} country="alimentation" />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
        </div>
    </div>
  )
}

export default PSUStep