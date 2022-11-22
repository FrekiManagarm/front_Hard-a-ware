import { Button, SimpleGrid } from '@mantine/core';
import {useContext} from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ConfigurationContext } from '../../../context/ConfigurationProvider';
import useHDDStepStyles from './HDDStep.style'

const HDDStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useHDDStepStyles();
  const { pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Disque Dur</h3>
      <SimpleGrid cols={4} spacing={32} breakpoints={[
        { maxWidth: "xs", cols: 1 },
        { minWidth: 'sm', cols: 2 },
        { maxWidth: 'md', cols: 2 },
        { minWidth: 'md', cols: 3 },
        { maxWidth: "lg", cols: 3 },
        { maxWidth: 1200, cols: 3 },
      ]}>
        {data && data?.data.map((hdd) => (
          <ProductCard title={hdd.nom} type='hdd_id' cat="disque dur" description={hdd.description} item={hdd} image={hdd.image} link={hdd.link} />
        ))}
      </SimpleGrid>
      <div className={classes.buttonsWrapper}>
        <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
        <Button color="green" className={classes.button} onClick={() => pushToDraft("hdd_id")}>Etape suivante</Button>
      </div>
    </div>
  )
}

export default HDDStep