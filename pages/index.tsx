
import {motion} from 'framer-motion';

export default function Home() {

  return (
    <>
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        drag
      >
        NNDYM
      </motion.h1>
    </>
  )
}
