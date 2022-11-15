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
        <SimpleGrid cols={4} spacing="xl">
          {data && data?.data.map((ram) => (
            <ProductCard title={ram.nom} type="ram" image={ram.image} link={ram.link} cat="memoire vive" description={ram.description} item={ram} />
          ))}
        </SimpleGrid>
        <div className={classes.buttonsWrapper}>
          <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
          <Button color="green" className={classes.button} onClick={() => router.push('/configurator/resume')}>Terminer et aller au résumé</Button>
        </div>
    </div>
  )
}

export default RAMStep