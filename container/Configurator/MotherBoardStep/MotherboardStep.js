import { Button, SimpleGrid } from "@mantine/core";
import { useContext } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { ConfigurationContext } from "../../../context/ConfigurationProvider";
import useMotherBoardStepStyles from "./MotherboardStep.style"


const MotherboardStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useMotherBoardStepStyles();
  const { config, pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <h3>Etape de la Carte Mère</h3>
        <SimpleGrid cols={4} spacing={32} breakpoints={[
          { maxWidth: "xs", cols: 1 },
          { minWidth: 'sm', cols: 2 },
          { maxWidth: 'md', cols: 2 },
          { minWidth: 'md', cols: 3 },
          { maxWidth: "lg", cols: 3 },
          { maxWidth: 1200, cols: 3 },
          { minWidth: 1200, cols: 4 }
        ]}>
          {data && data?.data.map((mb) => (
            <ProductCard title={mb.nom} link={mb.link} type="motherboard_id" cat="carte mere" description={mb.description} item={mb} image={mb.image} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
          {config.motherboard_id !== null ? <Button color="green" className={classes.button} onClick={() => pushToDraft("motherboard_id")}>Etape suivante</Button> : <Button color="grape" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Passer cette étape</Button>}
        </div>
    </div>
  )
}

export default MotherboardStep