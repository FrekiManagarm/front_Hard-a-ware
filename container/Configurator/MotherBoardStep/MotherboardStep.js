import { Button, SimpleGrid } from "@mantine/core";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useMotherBoardStepStyles from "./MotherboardStep.style"


const MotherboardStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useMotherBoardStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape de la Carte Mère</h3>
        <SimpleGrid cols={4} spacing={32}>
          {data && data?.data.map((mb) => (
            <ProductCard title={mb.nom} link={mb.link} type="carte_mere" cat="carte mere" description={mb.description} item={mb} image={mb.image} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précedente</Button>
          <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
        </div>
    </div>
  )
}

export default MotherboardStep