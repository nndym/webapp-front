import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import Image from 'next/image'
import { footer_links } from 'static_data/footer'

function Footer() {
    return (
        <footer className='w-full min-h-[220px] container sm:m-auto md:px-24 px-8 py-4 pt-32'>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3">
                {footer_links.sections.map((section, index) => (
                    <section key={index}>
                        <h2 className='font-bold mb-4'>{section.title}</h2>
                        <ul>
                            {section.links.map((link, index) => (
                                <li className="mb-1 hover:text-blue transition-colors" key={index}>
                                    {link.external ? (
                                        <a target='_blank' rel="noreferrer" href={link.link}>{link.name}</a>
                                    ) : (
                                        <Link href={link.link} passHref>
                                            <a>{link.name}</a>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
            <div className=' mt-16 sm:mt-32'>
                <Image onClick={()=>router.push("/", undefined, {scroll:false})} width={45} height={45} alt="NNDYM Logo" className="cursor-pointer" src="/logo.svg" />
                <div className="my-4 md:flex">
                    <a target="_blank" className='mr-4' rel="noreferrer" href="https://vercel.com/?utm_source=[nndym]&utm_campaign=oss">
                        <Image width={106} height={22} src="/vercel/powered-by-vercel.svg" alt="powered by vercel"/>
                    </a>
                    <ul className='sm:flex mt-4 md:mt-0'>
                        <li className="mb-1 mr-4 hover:text-blue transition-colors">
                            <Link scroll={false} href="/cookies" passHref>
                                <a>Cookie Policy</a>
                            </Link>
                        </li>
                        <li className="mb-1 mr-4 hover:text-blue transition-colors">
                            <Link scroll={false} href="/fairuse" passHref>
                                <a>Fair Use Policy</a>
                            </Link>
                        </li>
                        <li className="mb-1 mr-4 hover:text-blue transition-colors">
                            <Link scroll={false} href="/privacy" passHref>
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li className="mb-1 mr-4 hover:text-blue transition-colors">
                            <Link scroll={false} href="/terms" passHref>
                                <a>Terms & Conditions</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
