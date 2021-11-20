import React from 'react'

function PageContainer({children, half}:{children:React.ReactNode, half?:boolean}) {
    return (
        <div className='container sm:m-auto lg:px-16 xl:px-64 px-8 py-4'>
            <div className={"grid" + (half ? " grid-cols-1 md:grid-cols-2 gap-4"  : " ")}>
                {children}
            </div>
        </div>
    )
}

export default PageContainer
