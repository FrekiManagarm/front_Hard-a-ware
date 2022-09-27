import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useCoolingStepStyles from './CoolingStep.style'

const CoolingStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCoolingStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Refroidissement</h3>
        <SimpleGrid cols={4}>
          {data && data?.data.map((cooling) => (
            <ProductCard title={cooling.nom} image={cooling.image} country="cooling" link={cooling.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
        </div>
    </div>
  )
}

export default CoolingStep