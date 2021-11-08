import React, { useRef, useState } from 'react'
import Base from './InputParts/Base';
import HelperText from './InputParts/HelperText';
import Label from './InputParts/Label';
import Wrapper from './InputParts/Wrapper';

interface Props {
    name?: string,
    label?: string,
    id?: string,
    icon?: boolean,
    error?: string | boolean,
    helperText?: string,
    required?: boolean,
}

function EmailInput({
    name = "email",
    label = "Email",
    id = "email",
    icon = false,
    error,
    helperText,
    required = false,
}: Props) {

    return (
        <Wrapper>
            <Label 
                label={label} 
                id={id} 
                required={required}
                error={error}
            />
            <Base
                name={name}
                id={id}
                required={required}
                icon={icon} 
                error={error}
            />
            <HelperText error={error} helperText={helperText}/>
        </Wrapper>
    )
}

export default EmailInput
