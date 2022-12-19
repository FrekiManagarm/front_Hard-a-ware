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
            router.pathname === '/components/[[...tab]]' ||
            router.pathname === '/configurator' ||
            router.pathname === '/configurator/resume' ||
            router.pathname === '/login' ||
            router.pathname === '/registration' ? (
                <>
                    <Header user={user} isLoggedIn={isLoggedIn} />
                    <Content>{children}</Content>
                    {
                        router.pathname === '/' ||
                        router.pathname === '/components/[[...tab]]'
                        
                    ? (<Footer />)
                    : null}
                </>
            ) : (
                <>
                    <Content>{children}</Content>
                    {router.pathname.split("/")[1] !== "dashboard" ? <Footer /> : null}
                </>
            )
        }
    </Layout>
  )
}

export default withRouter(LayoutWrapper)