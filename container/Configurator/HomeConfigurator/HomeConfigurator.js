import Error from 'next/error';
import { useRouter } from 'next/router'
import React from 'react'
import { HomeConfiguratorWrapper } from './HomeConfigurator.style';

const HomeConfigurator = ({ activeStep, setActiveStep }) => {

    const router = useRouter();

  return (
    <>
        <HomeConfiguratorWrapper>
          <h1>Coucou</h1>
          <button onClick={() => {
            setActiveStep(2)
          }} >Passer à l'étape suivante</button>
        </HomeConfiguratorWrapper>
    </>
  )
}

export default HomeConfigurator