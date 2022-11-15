import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import usePSUStepStyles from './PSUStep.style'

const PSUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = usePSUStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Alimentation</h3>
        <SimpleGrid cols={4} spacing={32}>
          {data && data?.data.map((psu) => (
            <ProductCard title={psu.nom} image={psu.image} link={psu.link} cat="alimentation" description={psu.description} item={psu} type="alim" />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
        </div>
    </div>
  )
}

export default PSUStep