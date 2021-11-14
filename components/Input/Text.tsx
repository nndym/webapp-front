import React from 'react'
import Base from './InputParts/Base'
import HelperText from './InputParts/HelperText'
import Label from './InputParts/Label'
import { InputProps } from './InputParts/types'
import Wrapper from './InputParts/Wrapper'

function TextInput({
    name,
    label,
    id,
    icon,
    error,
    success,
    helperText,
    required = false,
    spacing = false,
    type = "text",
    value,
    autoComplete,
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
                icon={icon} 
                type={type}
                value={value}
                error={error}
                autoComplete={autoComplete}
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

export default TextInput
