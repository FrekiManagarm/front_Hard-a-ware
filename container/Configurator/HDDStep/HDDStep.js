import { Button, SimpleGrid } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import useHDDStepStyles from './HDDStep.style'

const HDDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useHDDStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Disque Dur</h3>
      <SimpleGrid cols={4} spacing={32}>
        {data && data?.data.map((hdd) => (
          <ProductCard title={hdd.nom} type='disque_dur' cat="disque dur" description={hdd.description} item={hdd} image={hdd.image} link={hdd.link} />
        ))}
      </SimpleGrid>
      <div className={classes.buttonsWrapper}>
        <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
        <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
      </div>
    </div>
  )
}

export default HDDStep