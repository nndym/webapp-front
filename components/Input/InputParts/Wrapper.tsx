import React from 'react'

function Wrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

export default Wrapper
