import React from 'react'

interface Props {
    label: string,
    id: string,
    error?: string | boolean,
    required?: boolean,
}

function Label({
    label,
    id,
    error,
    required,
}:Props) {
    return (
        <label className={"my-1 dark:text-white" + (error ? ' text-red-500 ' : " text-black ")} htmlFor={id}>{label} {required && <span className='font-bold'>*</span>}</label>
    )
}

export default Label
