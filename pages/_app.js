import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
