import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <footer>
            <a target="_blank" rel="noreferrer" href="https://vercel.com/?utm_source=[nndym]&utm_campaign=oss">
                <Image width={106} height={22} src="/vercel/powered-by-vercel.svg" alt="powered by vercel"/>
            </a>
        </footer>
    )
}

export default Footer
