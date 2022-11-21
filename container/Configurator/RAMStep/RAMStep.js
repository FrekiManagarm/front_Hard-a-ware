import { Button, SimpleGrid, Title, Transition } from "@mantine/core";
import { useRouter } from "next/router";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { ConfigurationContext } from "../../../context/ConfigurationProvider";
import useRAMStepStyles from "./RAMStep.style"


const RAMStep = ({ activeStep, setActiveStep, data }) => {

  const { classes } = useRAMStepStyles();
  const router = useRouter();
  const { config, setConfig, draftToConfig } = useContext(ConfigurationContext);

  return (
    <div className={classes.wrapper}>
        <Title>Etape Mémoire Vive</Title>
        {/* <Transition>

        </Transition>
        <Transition> */}
          <SimpleGrid cols={4} spacing={32} breakpoints={[
            { maxWidth: 900, cols: 3 },
            { maxWidth: 755, cols: 2 },
            { maxWidth: 600, cols: 1 },
          ]}>
            {data && data?.data.map((ram) => (
              <ProductCard title={ram.nom} type="ram" image={ram.image} link={ram.link} cat="memoire vive" description={ram.description} item={ram} />
            ))}
          </SimpleGrid>
          <div className={classes.buttonsWrapper}>
            <Button color="red" className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>Etape précédente</Button>
            <Button color="green" className={classes.button} onClick={() => {
              setConfig({ ...config, status: "done" })
              draftToConfig()
            }}>Terminer et aller au résumé</Button>
          </div>
        {/* </Transition> */}
    </div>
  )
}

export default RAMStep