import App from "next/app";
import Head from "next/head";
import { fetchAPI } from '../lib/api';
import { createContext } from 'react';
import { getStrapiMedia } from '../lib/media';
  
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0077FF',
    secondary: '#0800FF',
  },
}


export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {

  const {global} = pageProps;
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  )
}


MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
}

export default MyApp
