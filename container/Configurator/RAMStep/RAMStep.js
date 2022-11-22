import { Button, SimpleGrid, Title, Transition } from "@mantine/core";
import { useRouter } from "next/router";
import { useContext } from "react";
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
            { maxWidth: "xs", cols: 1 },
            { minWidth: 'sm', cols: 2 },
            { maxWidth: 'md', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { maxWidth: "lg", cols: 3 },
            { maxWidth: 1200, cols: 3 },
          ]}>
            {data && data?.data.map((ram) => (
              <ProductCard title={ram.nom} type="ram_id" image={ram.image} link={ram.link} cat="memoire vive" description={ram.description} item={ram} />
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