import { useRouter } from "next/router";
import AuthProvider from "../context/AuthProvider";
import GlobalStyle from "../public/styles/Global.style";
import { withData } from '../helpers/restriction';

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
      <GlobalStyle />
      <Component {...pageProps} />
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
