import Footer from '@components/Footer'
import React from 'react'

function MainLayout({children}) {
    return (
        <>
            <div className='pt-[105px] min-h-screen'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout
