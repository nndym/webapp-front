import App from "next/app";
import Head from "next/head";
import { fetchAPI } from '../lib/api';
import React, { useEffect } from 'react';
import { getStrapiMedia } from '../lib/media';
import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { useRouter } from "next/router";

export const GlobalContext = React.createContext({});

function MyApp({ Component, pageProps }) {

  const {global} = pageProps;

  const { pathname } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }, [pathname]);

  return (
    <Provider session={pageProps.session}>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <div className="font-roboto bg-gray-100 dark:bg-gray-700 min-h-screen">
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </div>
    </Provider>
  )
}


MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
}

export default MyApp
