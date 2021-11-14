import MainLayout from '@components/Layout/Main';
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
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          drag
          style={{height: '200vh'}}
        >
          NNDYM
        </motion.h1>
      </MainLayout>
    </>
  )
}
