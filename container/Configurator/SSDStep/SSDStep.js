import { Button, SimpleGrid } from '@mantine/core';
import {useContext} from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useSSDStepStyles from './SSDStep.style'

const SSDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useSSDStepStyles();
  const { config, pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <h3>Etape SSD</h3>
        <SimpleGrid cols={4} spacing={32} breakpoints={[
          { maxWidth: "xs", cols: 1 },
          { minWidth: 'sm', cols: 2 },
          { maxWidth: 'md', cols: 2 },
          { minWidth: 'md', cols: 3 },
          { maxWidth: "lg", cols: 3 },
          { maxWidth: 1200, cols: 3 },
        ]}>
          {data && data?.data.map((ssd) => (
            <ProductCard title={ssd.nom} type="ssd_id" item={ssd} cat="ssd" description={ssd.description} image={ssd.image} link={ssd.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          {config.ssd_id !== null ? <Button color="green" className={classes.button} onClick={() => pushToDraft("ssd_id")}>Etape Suivante</Button> : <Button className={classes.button} color="grape" onClick={() => setActiveStep(activeStep + 1)}>Passer à l'étape suivante</Button>}
        </div>
    </div>
  )
}

export default SSDStep