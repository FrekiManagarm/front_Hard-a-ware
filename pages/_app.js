import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

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
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
