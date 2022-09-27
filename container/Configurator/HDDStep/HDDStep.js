import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useHDDStepStyles from './HDDStep.style'

const HDDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useHDDStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Disque Dur</h3>
      <SimpleGrid cols={4}>
        {data && data?.data.map((hdd) => (
          <ProductCard title={hdd.nom} country='disque dur' image={hdd.image} link={hdd.link} />
        ))}
      </SimpleGrid>
      <div className={classes.buttonsWrapper}>
        <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
        <Button className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
      </div>
    </div>
  )
}

export default HDDStep