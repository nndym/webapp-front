import React from 'react'
import Base from './InputParts/Base'
import HelperText from './InputParts/HelperText'
import Label from './InputParts/Label'
import { InputProps } from './InputParts/types'
import Wrapper from './InputParts/Wrapper'
import PasswordStrengthBar from 'react-password-strength-bar';
import PasswordBar from './InputParts/PasswordBar'


function PasswordInput({
    name = "password",
    label = "Password",
    id = "password",
    bar = false,
    icon,
    error,
    helperText,
    required = false,
    spacing = false,
    value,
    success,
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
        <Wrapper spacing={spacing}>
            <Label 
                label={label} 
                id={id} 
                required={required}
                error={error}
            />
            <Base
                name={name}
                id={id}
                toggle
                required={required}
                icon={icon} 
                error={error}
                type="password"
                value={value}
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
            {bar && <PasswordBar value={value} />}
            <HelperText error={error} helperText={helperText} success={success}/>
        </Wrapper>
    )
}

export default PasswordInput
