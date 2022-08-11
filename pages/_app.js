import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { withData } from '../helpers/restriction';
import LayoutWrapper from '../container/Layout/Layout';

function MyApp({ 
  Component, 
  pageProps,
  query,
  user,
  isLoggedIn,
  locale,
  pathname,
  tokenCookie
}) {

  const router = useRouter();
  const AuthUser = typeof user === "string" ? JSON.parse(user) : user;

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <LayoutWrapper isLoggedIn={isLoggedIn} user={user}>
          <DefaultSeo 
            title="HardShop - Your best PC experience"
            description="HardShop website"
            openGraph={{
              type: "website",
              locale: locale,
              url: "https://hardshop.com",
              site_name: "HardShop"
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image"
            }}
          />
        </LayoutWrapper>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const { query, pathname, asPath, locale, res, req } = ctx
  const { user, isLoggedIn, token } = await withData(ctx);

  const tokenCookie = token;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  let isProtectedRoute = [
    `/dashboard`,
    `/configurator`,
  ].includes(pathname);

  if (!isLoggedIn && isProtectedRoute && res) {
    res.writeHead(302, {
      Location: `${process.env.SERVER_FRONT}/login?next=${asPath}`,
    });
    res.end();
  }

  return { pageProps, query, pathname, user, isLoggedIn, tokenCookie }

}

export default MyApp
