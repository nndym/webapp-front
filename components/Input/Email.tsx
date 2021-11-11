import React, { useRef, useState } from 'react'
import Base from './InputParts/Base';
import HelperText from './InputParts/HelperText';
import Label from './InputParts/Label';
import { InputProps } from './InputParts/types';
import Wrapper from './InputParts/Wrapper';

function EmailInput({
    name = "email",
    label = "Email",
    id = "email",
    icon,
    error,
    success,
    helperText,
    required = false,
    spacing = false,
    autoComplete,
    type = "email",
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onClick,
    onDoubleClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
}: InputProps) {

    return (
        <Wrapper spacing={error ? false : spacing}>
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
                autoComplete={autoComplete}
                icon={icon} 
                type={type}
                value={value}
                error={error}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onContextMenu={onContextMenu}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
            />
            <HelperText error={error} success={success} helperText={helperText}/>
        </Wrapper>
    )
}

export default EmailInput
