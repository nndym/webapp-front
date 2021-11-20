import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    children?: React.ReactNode
    title: string
    cta: string
    half?: boolean
    subtitle?: string,
    image?: any,
    breadcrumbs?: {
        title: string,
        link: string
    },
    alt?: string,
}

function PageHeader({
    title,
    cta,
    half,
    subtitle,
    breadcrumbs,
    image,
    alt,
}: Props) {

    return (
        <PageContainer half={half || !!image}>
            <div>
                <motion.h6 
                    className='mt-12 font-bold '
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={ { duration: 0.7, delay: 0.6, type: "spring" } }
                >{breadcrumbs && <Link passHref href={breadcrumbs.link}><a className='hover:text-blue transition-colors'>{breadcrumbs.title} / </a></Link>}{title}</motion.h6>
                <motion.h1 
                    className='font-bold my-2 text-4xl text-blue'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={ { duration: 0.7, delay:1, type: "spring" } }
                >{cta}</motion.h1>
                {subtitle && (
                    <motion.p
                        className='text-md text-gray-600 my-2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={ { duration: 0.7, delay:1.3, type: "spring" } }
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
            {image && (
                <motion.div
                    className=' flex flex-row justify-center items-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={ { duration: 0.7, delay:1.6, type: "spring" } }
                >
                    <motion.div 
                        className='w-full'
                        whileHover={ { scale: 1.05, rotate: 1 } }
                        transition={ { duration: 0.2, ease: "easeInOut" } }
                    >
                        <Image alt={alt} placeholder="blur" src={image} quality={100} />
                    </motion.div>
                </motion.div>
            )}
        </PageContainer>
    )
}

export default PageHeader
