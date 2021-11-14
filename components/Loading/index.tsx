import React from 'react'

function Loading({text}:{text?:string}) {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <i className="las la-circle-notch text-6xl mb-3 animate-spin dark:text-white text-blue"></i>
            <h6 className="text-sm uppercase font-bold dark:text-white text-blue mb-4">{text || "Give us a second!"}</h6>
        </div>
    )
}

export default Loading
