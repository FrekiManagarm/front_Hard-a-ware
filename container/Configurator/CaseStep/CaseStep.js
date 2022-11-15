import { Button, SimpleGrid } from "@mantine/core";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useCaseStepStyles from "./CaseStep.style"

const CaseStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCaseStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Boitier</h3>
      <SimpleGrid cols={4} spacing="xl">
        {data && data?.data.map((boitier) => (
          <ProductCard title={boitier.nom} description={boitier.description} cat="boitier" type="boitier" item={boitier} image={boitier.image} link={boitier.link} />
        ))}
      </SimpleGrid>
      <div className={classes.buttonsWrapper}>
        <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)} >Etape précédente</Button>
        <Button color="green" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
      </div>
    </div>
  )
}

export default CaseStep