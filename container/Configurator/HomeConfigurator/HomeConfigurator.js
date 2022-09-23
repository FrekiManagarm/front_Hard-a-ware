import Error from 'next/error';
import { useRouter } from 'next/router'
import React from 'react'
import { HomeConfiguratorWrapper } from './HomeConfigurator.style';

const HomeConfigurator = () => {

    const router = useRouter();

  return router.pathname == "/configurator/" ? (
    <>
        <HomeConfiguratorWrapper>

        </HomeConfiguratorWrapper>
    </>
  ) : (
    <>
        <Error statusCode={404} />
    </>
  )
}

export default HomeConfigurator