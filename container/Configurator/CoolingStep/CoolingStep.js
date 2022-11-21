import { Button, SimpleGrid, Transition } from '@mantine/core';
import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useCoolingStepStyles from './CoolingStep.style'

const CoolingStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCoolingStepStyles();
  const { pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <h3>Etape Refroidissement</h3>
        {/* <Transition
        >
          
        </Transition>
        <Transition> */}
          <SimpleGrid cols={4} spacing={32} breakpoints={[
            { maxWidth: 900, cols: 3 },
            { maxWidth: 755, cols: 2 },
            { maxWidth: 600, cols: 1 },
          ]}>
            {data && data?.data.map((cooling) => (
              <ProductCard title={cooling.nom} description={cooling.description} cat="refroidissement" image={cooling.image} type="cooling" item={cooling} link={cooling.link} />
            ))}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
            <Button color="green" className={classes.button} onClick={() => pushToDraft()}>Etape Suivante</Button>
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default CoolingStep