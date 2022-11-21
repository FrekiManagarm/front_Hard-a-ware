import { Button, SimpleGrid } from '@mantine/core';
import {useContext} from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import usePSUStepStyles from './PSUStep.style'

const PSUStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = usePSUStepStyles();
  const { pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <h3>Etape Alimentation</h3>
        <SimpleGrid cols={4} spacing={32} breakpoints={[
          { maxWidth: 900, cols: 2 },
          { maxWidth: 755, cols: 2 },
          { maxWidth: 600, cols: 1 },
        ]}>
          {data && data?.data.map((psu) => (
            <ProductCard title={psu.nom} image={psu.image} link={psu.link} cat="alimentation" description={psu.description} item={psu} type="psu_id" />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button color="green" className={classes.button} onClick={() => pushToDraft("psu_id")}>Etape Suivante</Button>
        </div>
    </div>
  )
}

export default PSUStep