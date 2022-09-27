import { Button, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useRAMStepStyles from "./RAMStep.style"


const RAMStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useRAMStepStyles();
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
        <h3>Etape Mémoire Vive</h3>
        <SimpleGrid cols={4}>
          {data && data?.data.map((ram) => (
            <ProductCard title={ram.nom} country="mémoire vive" image={ram.image} link={ram.link} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button className={classes.button} onClick={() => router.push('/configurator/resume')}>Aller au résumé</Button>
        </div>
    </div>
  )
}

export default RAMStep