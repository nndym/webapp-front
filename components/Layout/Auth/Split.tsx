import React from 'react'

function Split({children}: {children: React.ReactNode}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-3 min-h-screen sm:h-auto dark:bg-gray-700 flex flex-col items-center justify-center">
                {children[0]}
            </div>
            <div className="bg-blue min-h-screen sm:h-auto dark:bg-gray-800 lg:col-span-4 flex flex-col items-center justify-center">
                {children[1]}
            </div>
        </div>
    )
}

export default Split
