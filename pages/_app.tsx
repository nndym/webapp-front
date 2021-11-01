import App from "next/app";
import Head from "next/head";
import { fetchAPI } from '../lib/api';
import React from 'react';
import { getStrapiMedia } from '../lib/media';
import '../styles/globals.css'

export const GlobalContext = React.createContext({});

function MyApp({ Component, pageProps }) {

  const {global} = pageProps;
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <div className="font-roboto bg-gray-100 min-h-screen">
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </div>
    </>
  )
}


MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
}

export default MyApp
