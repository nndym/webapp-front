import React from 'react'

interface Props {
    label: string,
    id: string,
    error?: string | boolean,
    required?: boolean,
    noSpace?: boolean
}

function Label({
    label,
    id,
    error,
    noSpace,
    required,
}:Props) {
    return (
        <label className={"dark:text-white" + (error ? ' text-red-500 ' : " text-black ") + (noSpace ? " text-sm font-medium" : " my-1")} htmlFor={id}>{label} {required && <span className='font-bold'>*</span>}</label>
    )
}

export default Label
