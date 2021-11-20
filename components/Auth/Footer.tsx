import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <a target="_blank" rel="noreferrer" href="https://vercel.com/?utm_source=[nndym]&utm_campaign=oss">
                <Image width={106} height={22} src="/vercel/powered-by-vercel.svg" alt="powered by vercel"/>
            </a>
            <ul className='sm:flex mt-1'>
                <li className="mb-1 mr-4 text-sm hover:text-blue transition-colors">
                    <Link scroll={false} href="/cookies" passHref>
                        <a>Cookie Policy</a>
                    </Link>
                </li>
                <li className="mb-1 mr-4 text-sm hover:text-blue transition-colors">
                    <Link scroll={false} href="/fairuse" passHref>
                        <a>Fair Use Policy</a>
                    </Link>
                </li>
                <li className="mb-1 mr-4 text-sm hover:text-blue transition-colors">
                    <Link scroll={false} href="/privacy" passHref>
                        <a>Privacy Policy</a>
                    </Link>
                </li>
                <li className="mb-1 mr-4 text-sm hover:text-blue transition-colors">
                    <Link scroll={false} href="/terms" passHref>
                        <a>Terms & Conditions</a>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
