import React from 'react'

function PageContainer({children}:{children:React.ReactNode}) {
    return (
        <div className='container sm:m-auto lg:px-16 xl:px-64 px-8 py-4'>
            {children}
        </div>
    )
}

export default PageContainer
