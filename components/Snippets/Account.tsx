import Button from '@components/Button'
import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import React from 'react'
import { account_info_data } from 'static_data/account_info'

function AccountSnippet() {
    return (
        <PageContainer>
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{duration: 0.7, type: "spring"}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className='grid md:grid-cols-3 my-4 gap-8 bg-gray-200 shadow-md p-8 rounded-md'
            >
                <motion.div 
                    className='flex flex-col items-start justify-center'
                    initial={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.7, type: "spring"}}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h5 className='text-blue text-4xl font-bold' >Become a member</h5>
                    <p className='py-2'>Join a engaging, caring and empowering community to seek your true potential.</p>
                    <Button size="medium" href='/account/info/'>
                        Learn More
                    </Button>
                    <h6 className="text-2xl py-2 uppercase font-semibold">100% Free</h6>
                </motion.div>
                <motion.div 
                    className='grid lg:grid-cols-2 gap-4 col-span-2'
                    initial="closed"
                    animate="open"
                    transition={{delay: 2, duration: 0.5}}
                    variants={{
                        open:{
                            opacity: 1,
                            transition:{ staggerChildren: 0.2 }
                        },
                        closed:{
                            opacity: 0,
                        }
                    }}
                >
                    {account_info_data.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className='flex'
                            transition={{duration: 0.4, type: "spring"}}
                            variants={{
                                open:{
                                    opacity: 1,
                                    y: 0,
                                },
                                closed:{
                                    opacity: 0,
                                    y: 25,
                                }
                            }}
                        >
                            <div>
                                <div className={item.bg_color + " w-12 h-12 flex justify-center items-center rounded-full"}>
                                    <i className={item.icon + " text-2xl " + item.icon_color}></i>
                                </div>
                            </div>
                            <div className="ml-4 mt-3">
                                <h6 className='font-bold'>{item.title}</h6>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div >
            </motion.div>
        </PageContainer>
    )
}

export default AccountSnippet
