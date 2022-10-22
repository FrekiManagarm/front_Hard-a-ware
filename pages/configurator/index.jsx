import { useRouter } from 'next/router';
import { Divider, Modal, Stepper, Title, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import CaseStep from '../../container/Configurator/CaseStep/CaseStep';
import CoolingStep from '../../container/Configurator/CoolingStep/CoolingStep';
import CPUStep from "../../container/Configurator/CPUStep/CPUStep";
import GPUStep from '../../container/Configurator/GPUStep/GPUStep';
import HDDStep from '../../container/Configurator/HDDStep/HDDStep';
import HomeConfigurator from '../../container/Configurator/HomeConfigurator/HomeConfigurator';
import MotherboardStep from '../../container/Configurator/MotherBoardStep/MotherboardStep';
import PSUStep from '../../container/Configurator/PSUStep/PSUStep';
import RAMStep from "../../container/Configurator/RAMStep/RAMStep";
import SSDStep from '../../container/Configurator/SSDStep/SSDStep';
import GetAPIData from '../../helpers/get_api_data';
import { withData } from '../../helpers/restriction';
import { NextSeo } from 'next-seo';

const Configurator = ({ pageData, user, isLoggedIn }) => {
  const router = useRouter();
  const { query } = router;
  const [activeStep, setActiveStep] = useState(null);
  const [openedModal, setOpenedModal] = useState(false);
  console.log(pageData, 'pageData')

  useEffect(() => {
    setOpenedModal(true)
  }, []);

  const data = {
    cpuData: pageData[0],
    gpuData: pageData[1],
    hddData: pageData[2],
    ssdData: pageData[3],
    coolingsData: pageData[4],
    boitiesData: pageData[5],
    psusData: pageData[6],
    ramData: pageData[7],
    mbData: pageData[8]
  }

  return (
    <>
      <NextSeo title='Configurator' description='Bienvenue dans notre configurateur PC made in France' />
      <div style={{
        padding: "4rem 5rem",
      }}>
        <Title sx={{ textAlign: "center", padding: "1rem" }} >Configurator</Title>
        <Stepper
          active={activeStep}
          iconSize={30}
          color="orange"
          breakpoint="sm"
          size="xs"
        >
          <Stepper.Step label="Utilisation">
            <HomeConfigurator activeStep={activeStep} setActiveStep={setActiveStep} />
          </Stepper.Step>
          <Stepper.Step label="Processeur">
            <CPUStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.cpuData} />
          </Stepper.Step>
          <Stepper.Step label="Carte Mère">
            <MotherboardStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.mbData} />
          </Stepper.Step>
          <Stepper.Step label="Boitier" >
            <CaseStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.boitiesData} />
          </Stepper.Step>
          <Stepper.Step label="Carte Graphique">
            <GPUStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.gpuData} />
          </Stepper.Step>
          <Stepper.Step label="Disque Dur">
            <HDDStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.hddData} />
          </Stepper.Step>
          <Stepper.Step label="SSD">
            <SSDStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.ssdData} />
          </Stepper.Step>
          <Stepper.Step label="Le Refroidissement">
            <CoolingStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.coolingsData} />
          </Stepper.Step>
          <Stepper.Step label="L'alimentation">
            <PSUStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.psusData} />
          </Stepper.Step>
          <Stepper.Step label="La mémoire Vive">
          <RAMStep activeStep={activeStep} setActiveStep={setActiveStep} data={data.ramData} />
          </Stepper.Step>
        </Stepper>
        <Modal
          opened={openedModal}
          onClose={() => setOpenedModal(!openedModal)}
          centered
          closeOnClickOutside={false}
          size={1000}
          radius={12}
        >
          <Title sx={{ textAlign: "center" }} p={10}>Bienvenue dans le Configurator</Title>
          <Text></Text>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "1rem" }}>
            <Button onClick={() => router.back()} color="red">Retour</Button>
            <Button onClick={() => {
              setOpenedModal(false)
              setActiveStep(0)
            }} color="green" >Commencer</Button>
          </div>
        </Modal>  
      </div>
    </>
  )
}

Configurator.getInitialProps = async (ctx) => {
  const { locale } = ctx.query;

  const { user, isLoggedIn, token } = await withData(ctx)

  const apiUrl = [
    {
      endpoint: `${process.env.SERVER_API}/api/CPUs`,
      name: 'cpuData'
    },
    {
      endpoint: `${process.env.SERVER_API}/api/GPUs`,
      name: "gpuData"
    },
    {
      endpoint: `${process.env.SERVER_API}/api/HDDs`,
      name: "hddData"
    },
    {
      endpoint: `${process.env.SERVER_API}/api/SSDs`,
      name: "ssdData"
    },
    {
      endpoint: `${process.env.SERVER_API}/api/Coolings`,
      name: "coolingsData",
    },
    {
      endpoint: `${process.env.SERVER_API}/api/Boitiers`,
      name: "boitiersData",
    },
    {
      endpoint: `${process.env.SERVER_API}/api/PSUs`,
      name: 'psusData'
    },
    {
      endpoint: `${process.env.SERVER_API}/api/RAMs`,
      name: "ramData",
    },
    {
      endpoint: `${process.env.SERVER_API}/api/MotherBoards`,
      name: "mbData"
    },
  ];

  const response = await GetAPIData(apiUrl, locale);
  const pageData = response;

  return { pageData, user, isLoggedIn }

}

export default Configurator