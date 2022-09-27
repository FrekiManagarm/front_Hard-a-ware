import { useRouter } from 'next/router';
import { Stepper } from '@mantine/core';
import { useState } from 'react';
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

const Configurator = ({ pageData, user, isLoggedIn }) => {
  const router = useRouter();
  const { query } = router;
  const [activeStep, setActiveStep] = useState(0);
  const [configuration, setConfiguration] = useState({
    cpu: null,
    gpu: null,
    hdd: null,
    ssd: null,
    mb: null,
  });
  console.log(pageData, 'pageData')

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
    <div style={{
      padding: "2rem 6rem",
    }}>
      <h1>Configurator</h1>
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
    </div>
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