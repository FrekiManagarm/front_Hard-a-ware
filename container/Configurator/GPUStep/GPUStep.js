import { Button, SimpleGrid, Title, Transition } from '@mantine/core';
import React, { useContext } from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useGPUStepStyles from './GPUStep.style'

const GPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useGPUStepStyles();
  const { config, pushToDraft } = useContext(ConfigurationContext);
  // console.log(data, 'data gpu')

  return (
    <div className={classes.wrapper}>
        <Title>Etape Carte Graphique</Title>
        {/* <Transition>

        </Transition>
        <Transition> */}
          <SimpleGrid cols={4} spacing={32} breakpoints={[
            { maxWidth: "xs", cols: 1 },
            { minWidth: 'sm', cols: 2 },
            { maxWidth: 'md', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { maxWidth: "lg", cols: 3 },
            { maxWidth: 1200, cols: 3 },
            { minWidth: 1200, cols: 4 }
          ]}>
            {data && data?.data.map((gpu) => (
              <ProductCard title={gpu.nom} description={gpu.description} cat="carte graphique" type="gpu_id" item={gpu} image={gpu.image} link={gpu.link} />
            ))}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
            { config.gpu_id !== null ? <Button color="green" className={classes.button} onClick={() => pushToDraft("gpu_id")}>Etape suivante</Button> : <Button color="grape" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Passer cette étape</Button>}
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default GPUStep