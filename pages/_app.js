import { useRouter } from "next/router";
import AuthProvider from "../context/AuthProvider";
import GlobalStyle from "../public/styles/Global.style";
import { withData } from '../helpers/restriction';
import { DefaultSeo } from "next-seo";
import LayoutWrapper from "../components/Layout/Layout";

function MyApp({ 
  Component,
  pageProps,
  query,
  user,
  isLoggedIn,
  locale,
  pathname,
  tokenCookie,
}) {

  const router = useRouter();

  return (
    <AuthProvider>
      <LayoutWrapper user={user} isLoggedIn={isLoggedIn}>
        <DefaultSeo 
          title="HARDSHOP"
          titleTemplate="Hardshop | %s"
          description="HARDSHOP website"
          openGraph={{
            type: "website",
            locale: locale,
            url: "https://www.Hardshop.com/",
            site_name: "Hardshop",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <GlobalStyle />
        <Component {...pageProps} />
      </LayoutWrapper>
    </AuthProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const { query, pathname, asPath, locale, res, req } = ctx;
  const { user, isLoggedIn, token, } = await withData(ctx);
  const tokenCookie = token;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  let isProtectedRoute = [
    `/dashboard/[[...tab]]`,
    `configurator`
  ].includes(pathname);


  if (!isLoggedIn && isProtectedRoute && res) {
    res.writeHead(302, {
      Location: `${process.env.LOCAL_FRONT_SERVER}/login?next=${asPath}`,
    });
    res.end();
  }

  return { pageProps, query, pathname, user, isLoggedIn, tokenCookie };
}

export default MyApp
