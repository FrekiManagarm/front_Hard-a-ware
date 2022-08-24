import { useRouter, withRouter } from 'next/router'
import React from 'react'
import { Layout, Content } from './Layout.style'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const LayoutWrapper = ({ children, user, isLoggedIn }) => {

    const router = useRouter();

  return (
    <Layout>
        {
            router.pathname === '/' ||
            router.pathname === '/configurator' ||
            router.pathname === '/configurator/home' ||
            router.pathname === '/components' ||
            router.pathname === "/components/cpu" ||
            router.pathname === "/components/cpu/[id]" ||
            router.pathname === "/components/case" ||
            router.pathname === "/components/case/[id]" ||
            router.pathname === "/components/cooling" ||
            router.pathname === "/components/cooling/[id]" ||
            router.pathname === "/components/gpu" ||
            router.pathname === "/components/gpu/[id]" ||
            router.pathname === "/components/hdd" ||
            router.pathname === "/components/hdd/[id]" ||
            router.pathname === "/components/motherboard" ||
            router.pathname === "/components/motherboard/[id]" ||
            router.pathname === "/components/psu" ||
            router.pathname === "/components/psu/[id]" ||
            router.pathname === "/components/ram" ||
            router.pathname === "/components/ram/[id]" ||
            router.pathname === "/components/ssd" ||
            router.pathname === "/components/ssd/[id]" ||
            router.pathname === '/dashboard' ||
            router.pathname === '/login' ||
            router.pathname === '/registration' ? (
                <>
                    <Header user={user} isLoggedIn={isLoggedIn} />
                    <Content>{children}</Content>
                    {
                        // router.pathname === '/' ||
                        router.pathname === '/dashboard' ||
                        router.pathname === '/configurator/home' ||
                        router.pathname === '/components' ||
                        router.pathname === "/components/cpu" ||
                        router.pathname === "/components/cpu/[id]" ||
                        router.pathname === "/components/case" ||
                        router.pathname === "/components/case/[id]" ||
                        router.pathname === "/components/cooling" ||
                        router.pathname === "/components/cooling/[id]" ||
                        router.pathname === "/components/gpu" ||
                        router.pathname === "/components/gpu/[id]" ||
                        router.pathname === "/components/hdd" ||
                        router.pathname === "/components/hdd/[id]" ||
                        router.pathname === "/components/motherboard" ||
                        router.pathname === "/components/motherboard/[id]" ||
                        router.pathname === "/components/psu" ||
                        router.pathname === "/components/psu/[id]" ||
                        router.pathname === "/components/ram" ||
                        router.pathname === "/components/ram/[id]" ||
                        router.pathname === "/components/ssd" ||
                        router.pathname === "/components/ssd/[id]" 
                        
                    ? (<Footer />)
                    : null}
                </>
            ) : (
                <>
                    <Content>{children}</Content>
                    {router.pathname.split("/")[1] == "dashboard" ? <Footer /> : null}
                </>
            )
        }
    </Layout>
  )
}

export default withRouter(LayoutWrapper)