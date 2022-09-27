import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import useRAMStepStyles from "./RAMStep.style"



const RAMStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useRAMStepStyles();
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Mémoire Vive</h3>
        <Button onClick={() => router.push('/configurator/resume')}>Aller au résumé</Button>
    </div>
  )
}

export default RAMStep