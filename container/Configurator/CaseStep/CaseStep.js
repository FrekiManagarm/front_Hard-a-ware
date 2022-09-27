import { Button } from "@mantine/core";
import useCaseStepStyles from "./CaseStep.style"

const CaseStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useCaseStepStyles();

  return (
    <div className={classes.wrapper}>
      <h3>Etape du Boitier</h3>
      <Button onClick={() => setActiveStep(activeStep + 1)}>Etape Suivante</Button>
    </div>
  )
}

export default CaseStep