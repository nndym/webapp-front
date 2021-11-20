import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { account_info_data } from 'static_data/account_info'



function Banner({login}:{login?:boolean}) {
    return (
        <div className="w-[90%] md:h-screen relative flex flex-col justify-center py-16 md:py-0">
            <div className='md:fixed max-w-[600px] pr-8 lg:pr-0 '>
                <motion.div 
                    className='w-64'
                    initial={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.7, type: "spring"}}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl font-bold text-white">{login ? "Welcome back!" : "Become a Member" }</h2>
                    <p className="my-3">{login ? "We are proud to have you as part of our community, let's seek your true potential." : "Join a engaging, caring and empowering community to seek your true potential." } Learn more about having a <Link scroll={false} passHref href="/account/info"><a className="font-bold text-white underline hover:text-black transition-colors">NNDYM Account!</a></Link></p>
                </motion.div>
                <motion.div 
                    className='mt-16 grid lg:grid-cols-2 gap-4'
                    initial="closed"
                    animate="open"
                    transition={{delay: 2, duration: 0.5}}
                    variants={{
                        open:{
                            opacity: 1,
                            transition:{ staggerChildren: 0.4 }
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
                            transition={{duration: 0.6, type: "spring"}}
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
            </div>
        </div>
    )
}

export default Banner
