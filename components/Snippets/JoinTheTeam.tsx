import Button from '@components/Button'
import PageContainer from '@components/Page/Container'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const words = [
    "People who can run the show!",
    "Public Speakers",
    "Creative Thinkers",
    "Content Creators",
    "Natural Born Leaders",
    "The Crazy Ones",
    "The Overthinkers",
    "The Energetic doers",
    "The Outliers"
]

function JoinTheTeamSnippet() {

    const [visible, setVisible] = useState(false)
    const [word, setWord] = useState("Natural Born Leaders")
    const [count, setCount] = useState(0)

    useEffect(() => {
        if(!visible) {
            setTimeout(() => {
                setVisible(!visible)
            }, 700);
        }
        let timeout = setInterval(() => {
            setVisible(!visible)
            setWord(words[count])
            setCount((count + 1) % words.length)
        },1800)
        return () => {
            clearTimeout(timeout)
        }
    }, [count, visible])

    return (
        <PageContainer>
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{duration: 0.7, type: "spring"}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className='grid md:grid-cols-3 my-4 gap-8 bg-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 rounded-md'
            >
                <motion.div 
                    className='flex flex-col items-start justify-center'
                    initial={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.7, type: "spring"}}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h5 className='text-blue text-4xl font-bold' >Join the team!</h5>
                    <p className='py-2'>It takes a lot of people to run NNDYM and we are always looking for new faces and fresh ideas. Let us know how you can help!</p>
                    <Button size="medium" href='/apply/'>
                        Learn More
                    </Button>
                </motion.div>
                <div className="col-span-2 flex justify-start items-center h-48">
                    <h2 className="flex flex-col md:flex-row text-4xl">We need: <AnimatePresence>
                        {visible && (
                            <motion.div 
                                className='inline-block md:ml-2 font-bold'
                                exit={{ opacity: 0, y: -20 }}
                                transition={ { duration: 0.7, type: "spring" } }
                            >
                            <AnimatedText initial={{ y: '100%' }}
                                animate="visible"
                                variants={{
                                    visible: i => ({
                                    y: 0,
                                    transition: {
                                        delay: i * 0.1
                                    }
                                    })
                                }}>{word}
                            </AnimatedText></motion.div>
                        )}
                    </AnimatePresence>
                    </h2>
                </div>
            </motion.div>
        </PageContainer>
    )
}

const AnimatedText = ({ children, ...rest }) => {
    let words = children.split(' ')
    return words.map((word, index) => (
        <div
            key={index}
            style={{ display: 'inline-block', overflow: 'hidden' }}
        >
            <motion.div
                {...rest}
                style={{ display: 'inline-block', willChange: 'transform' }}
                custom={index}
            >
                {word + (index !== words.length - 1 ? '\u00A0' : '')}
            </motion.div>
        </div>
    ))
}

export default JoinTheTeamSnippet
