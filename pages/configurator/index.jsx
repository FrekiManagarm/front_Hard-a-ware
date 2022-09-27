import Error from 'next/error';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
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
  const [activeStep, setActiveStep] = useState(1);
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

  // console.log(data.cpuData)

  // const displayCurrentStep = () => {
  //   // console.log(query, 'pathname displayCurrentStep');

  //   if (activeStep) {
  //     switch (activeStep) {
  //       case 1:
  //         return <HomeConfigurator setActiveStep={setActiveStep} activeStep={activeStep} />
  //       case 2:
  //         return <MotherboardStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 3:
  //         return <CaseStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 4:
  //         return <GPUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 5:
  //         return <HDDStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 6:
  //         return <SSDStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 7: 
  //         return <CoolingStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 8:
  //         return <PSUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 9:
  //         return <RAMStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       case 10:
  //         return <CPUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
  //       default:
  //         return <Error statusCode={404} title="page non trouvé" />;
  //     }
  //   } else {
  //     return <Error statusCode={404} />
  //   }
  // }

  return (
    <div style={{
      padding: "2rem"
    }}>
      <Stepper
        active={activeStep}
        iconSize={30}
        color="orange"
        breakpoint="sm"
        size="xs"
      >
        <Stepper.Step label="Le processeur">
          <HomeConfigurator activeStep={activeStep} setActiveStep={setActiveStep} />
        </Stepper.Step>
        <Stepper.Step label="Etape 2">
          <CPUStep activeStep={activeStep} setActiveStep={setActiveStep} />
        </Stepper.Step>
        <Stepper.Step label="Etape 3">
          <MotherboardStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        </Stepper.Step>
        <Stepper.Step label="Quelle taille de boitier ?">
          
        </Stepper.Step>
        <Stepper.Step label="Etape 4" >
          <CaseStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        </Stepper.Step>
        <Stepper.Step label="Etape 5">

        </Stepper.Step>
        <Stepper.Step label="Etape 6">

        </Stepper.Step>
        <Stepper.Step label="Etape 7">

        </Stepper.Step>
        <Stepper.Step label="Etape 8">

        </Stepper.Step>
        <Stepper.Step label="Etape 9">

        </Stepper.Step>
        <Stepper.Step label="Etape 10">

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