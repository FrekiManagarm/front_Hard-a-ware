import Error from 'next/error';
import { useRouter } from 'next/router';
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

const Configurator = () => {
  const router = useRouter();

  const displayCurrentStep = () => {
    console.log(router.query, 'pathname displayCurrentStep');
    switch (router.asPath) {
      case "/configurator":
        return <HomeConfigurator />;
      case "/configurator/motherboard-step":
        return <MotherboardStep />;
      case "/configurator/case-step":
        return <CaseStep />;
      case "/configurator/gpu-step":
        return <GPUStep />;
      case "/configurator/hdd-step":
        return <HDDStep />;
      case "/configurator/ssd-step":
        return <SSDStep />;
      case "/configurator/cooling-step": 
        return <CoolingStep />;
      case "/configurator/psu-step":
        return <PSUStep />;
      case "/configurator/ram-step":
        return <RAMStep />;
      case "/configurator/cpu-step":
        return <CPUStep />;
      default:
        return <HomeConfigurator />;
    }
  }

  return (
    <ConfiguratorWrapper>
        {displayCurrentStep()}
    </ConfiguratorWrapper>
  )
}

export default Configurator