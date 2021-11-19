import MainLayout from '@components/Layout/Main';
import AccountSnippet from '@components/Snippets/Account';
import ISSOSevaSnippet from '@components/Snippets/ISSOSeva';
import QuoteSnippet from '@components/Snippets/Quote';
import {motion} from 'framer-motion';
import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Home() {

  return (
    <>
      <Head>
        <title>NNDYM</title>
      </Head>
      <Navigation/>
      <MainLayout>
        <AccountSnippet/>
        <QuoteSnippet/>
        <ISSOSevaSnippet/>
      </MainLayout>
    </>
  )
}
