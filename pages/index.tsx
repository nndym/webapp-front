
import {motion} from 'framer-motion';
import Navigation from '../components/Navigation';

export default function Home() {

  return (
    <>
      <Navigation/>
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        drag
        style={{height: '200vh'}}
      >
        NNDYM
      </motion.h1>
      <footer>
        <a target="_blank" rel="noreferrer" href="https://vercel.com/?utm_source=[nndym]&utm_campaign=oss">
          <img src="/vercel/powered-by-vercel.svg" alt="powered by vercel"/>
        </a>
      </footer>
    </>
  )
}
