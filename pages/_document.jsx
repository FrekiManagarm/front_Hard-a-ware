import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps()

class MyDocument extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html>
                <Head>
                  <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' /> 
                  {/* <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument