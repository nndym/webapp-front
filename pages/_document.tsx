import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument
