import { Button, SimpleGrid, Transition } from '@mantine/core';
import {useContext} from 'react'
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
            { maxWidth: "xs", cols: 1 },
            { minWidth: 'sm', cols: 2 },
            { maxWidth: 'md', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { maxWidth: "lg", cols: 3 },
            { maxWidth: 1200, cols: 3 },
          ]}>
            {data && data?.data.map((cooling) => (
              <ProductCard title={cooling.nom} description={cooling.description} cat="refroidissement" image={cooling.image} type="cooling_id" item={cooling} link={cooling.link} />
            ))}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
            <Button color="green" className={classes.button} onClick={() => pushToDraft("cooling_id")}>Etape Suivante</Button>
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default CoolingStep