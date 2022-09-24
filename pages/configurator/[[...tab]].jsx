import Error from 'next/error';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import { useState } from 'react';
import CaseStep from '../../container/Configurator/CaseStep/CaseStep';
import { ConfiguratorWrapper } from '../../container/Configurator/Configurator.style';
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
import { Stepper } from 'react-form-stepper';

const Configurator = ({ pageData, user, isLoggedIn }) => {
  const router = useRouter();
  const { query } = router;
  const [activeStep, setActiveStep] = useState(1);
  console.log(pageData, 'pageData')

  const data = {
    cpuData: pageData[0],
    gpuData: pageData[1]
  }

  const displayCurrentStep = () => {
    console.log(query, 'pathname displayCurrentStep');

    if (activeStep) {
      switch (activeStep) {
        case 1:
          return <MotherboardStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 2:
          return <CaseStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 3:
          return <GPUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 4:
          return <HDDStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 5:
          return <SSDStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 6: 
          return <CoolingStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 7:
          return <PSUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 8:
          return <RAMStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        case 9:
          return <CPUStep activeStep={activeStep} setActiveStep={setActiveStep} />;
        default:
          return <Error statusCode={404} title="page non trouvé" />;
      }
    }

    if (!query.tab) {
      return <HomeConfigurator setActiveStep={setActiveStep} activeStep={activeStep} />
    }
  }

  return (
    <ConfiguratorWrapper>
      <div
        style={{
          paddingBottom: "5rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Configurator</h1>
        <Stepper 
          steps={[
            {label: "Votre utilisation"},
            {label: "Processeur"},
            {label: "Boitier"},
            {label: "Carte Mère"},
            {label: "Disque Dur"},
            {label: "SSD"},
            {label: "Alimentation"},
            {label: "Mémoire Vive"}
          ]}
          activeStep={activeStep}
        />
        {displayCurrentStep()}
      </div>
      <div>
        <Sticky>

        </Sticky>
      </div>
       
        
    </ConfiguratorWrapper>
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