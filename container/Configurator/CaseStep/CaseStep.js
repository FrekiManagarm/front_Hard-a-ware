import { Button, SimpleGrid, Transition } from "@mantine/core";
import { useContext } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { ConfigurationContext } from "../../../context/ConfigurationProvider";
import useCaseStepStyles from "./CaseStep.style"

const CaseStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCaseStepStyles();
  const { config, pushToDraft } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Boitier</h3>
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
          {data && data?.data.map((boitier) => (
            <ProductCard title={boitier.nom} description={boitier.description} cat="boitier" type="case_id" item={boitier} image={boitier.image} link={boitier.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)} >Etape précédente</Button>
          { config.case_id !== null ? <Button color="green" className={classes.button} onClick={() => pushToDraft("case_id")}>Etape suivante</Button> : <Button color="grape" className={classes.button} onClick={() => setActiveStep(activeStep + 1)}>Passer cette étape</Button>}
        </div>
      {/* </Transition> */}
    </div>
  )
}

export default CaseStep