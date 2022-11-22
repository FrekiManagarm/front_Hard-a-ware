import { Button, SimpleGrid, Transition } from '@mantine/core';
import { useContext } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useCPUStepStyles from './CPUStep.style';

const CPUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes, theme } = useCPUStepStyles();
  const { pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <h3>Etape Processeur</h3>
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
          ]}>
            {data && data?.data.map((cpu) => {
              return (
                <ProductCard 
                  title={cpu.nom} 
                  image={cpu.image} 
                  link={cpu.link} 
                  description={cpu.description} 
                  type="cpu_id"
                  item={cpu}
                  cat="processeur"
                />
            )})}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => {
              setActiveStep(activeStep - 1)
            }}>Etape précédente</Button>
            <Button color="green" className={classes.button} onClick={() => {
              pushToDraft('cpu_id')
            }}>Etape suivante</Button>
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default CPUStep