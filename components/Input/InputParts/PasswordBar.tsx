import React from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'
import dynamic from 'next/dynamic'

const DynamicBar = dynamic(
    () => import('react-password-strength-bar'),
)


function PasswordBar({value}:{value:string}) {
    return (
        <DynamicBar password={value} />
    )
}

export default PasswordBar
