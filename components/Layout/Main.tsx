import Footer from '@components/Footer'
import React from 'react'

function MainLayout({children}) {
    return (
        <>
            <div className='pt-[105px] min-h-[60vh]'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout
