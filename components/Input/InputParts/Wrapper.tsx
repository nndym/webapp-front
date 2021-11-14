import React from 'react'

function Wrapper({children, spacing}: {children: React.ReactNode, spacing: boolean}) {
    return (
        <div className={"flex flex-col " + (spacing && "my-2")}>
            {children}
        </div>
    )
}

export default Wrapper
