import { Button } from "@mantine/core";
import useMotherBoardStepStyles from "./MotherboardStep.style"


const MotherboardStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useMotherBoardStepStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Etape de la Carte Mère</h3>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Etape suivante</Button>
    </div>
  )
}

export default MotherboardStep