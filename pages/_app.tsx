import '../styles/globals.css'
import App from "next/app";
import { fetchAPI } from '../lib/api';
import { createContext } from 'react';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {

  const {global} = pageProps;
  
  return (
    <>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}


MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
}

export default MyApp
