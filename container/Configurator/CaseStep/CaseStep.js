import { Button, SimpleGrid } from "@mantine/core";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useCaseStepStyles from "./CaseStep.style"

const CaseStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCaseStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Boitier</h3>
      <SimpleGrid cols={4}>
        {data && data?.data.map((boitier) => (
          <ProductCard title={boitier.nom} country="Boitier" image={boitier.image} link={boitier.link} />
        ))}
      </SimpleGrid>
      <div className={classes.buttonsWrapper}>
        <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)} >Etape précédente</Button>
        <Button className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
      </div>
    </div>
  )
}

export default CaseStep