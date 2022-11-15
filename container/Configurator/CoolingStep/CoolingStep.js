import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useCoolingStepStyles from './CoolingStep.style'

const CoolingStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCoolingStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Refroidissement</h3>
        <SimpleGrid cols={4} spacing={32}>
          {data && data?.data.map((cooling) => (
            <ProductCard title={cooling.nom} description={cooling.description} cat="refroidissement" image={cooling.image} type="cooling" item={cooling} link={cooling.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
          <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
        </div>
    </div>
  )
}

export default CoolingStep