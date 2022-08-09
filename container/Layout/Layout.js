import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, withRouter } from "next/router";
import LayoutProvider from "../../context/LayoutProvider";
import { Content, Layout } from "./Layout.style";

const Header = dynamic(() => import('./Header/Header'));
const Footer = dynamic(() => import('./Footer/Footer'));

const LayoutWrapper = ({ children, user, isLoggedIn }) => {
    if (typeof user === 'string') user = JSON.parse(user)
    const router = useRouter();

    return (
        <Layout>
            <LayoutProvider>
                {
                    router.pathname === '/' ||
                    router.pathname === '/products' ? (
                        <>
                            <Header user={user} isLoggedIn={isLoggedIn} />
                            <Content>{children}</Content>
                            {router.pathname === '/' ||
                            router.pathname === '/products'
                            ? (<Footer />) : null}
                        </>
                    ) : (
                        <>
                            <Content>{children}</Content>
                            {router.pathname.split('/')[1] == "dashboard" ? <Footer /> : null}
                        </>
                    )}
            </LayoutProvider>
        </Layout>
    )
}

export default withRouter(LayoutWrapper)