import { Button, SimpleGrid, Title, Transition } from '@mantine/core';
import React, { useContext } from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useGPUStepStyles from './GPUStep.style'

const GPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useGPUStepStyles();
  const { pushToDraft } = useContext(ConfigurationContext);
  // console.log(data, 'data gpu')

  return (
    <div className={classes.wrapper}>
        <Title>Etape Carte Graphique</Title>
        {/* <Transition>

        </Transition>
        <Transition> */}
          <SimpleGrid cols={4} spacing={32} breakpoints={[
            { maxWidth: 900, cols: 3 },
            { maxWidth: 755, cols: 2 },
            { maxWidth: 600, cols: 1 },
          ]}>
            {data && data?.data.map((gpu) => (
              <ProductCard title={gpu.nom} description={gpu.description} cat="carte graphique" type="carte_graphique" item={gpu} image={gpu.image} link={gpu.link} />
            ))}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
            <Button color="green" className={classes.button} onClick={() => pushToDraft()}>Etape suivante</Button>
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default GPUStep