import React from 'react'
import Base from './InputParts/Base'
import HelperText from './InputParts/HelperText'
import Label from './InputParts/Label'
import { InputProps } from './InputParts/types'
import Wrapper from './InputParts/Wrapper'

function MessageInput({
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
            <textarea
                name={name}
                id={id}
                required={required}
                value={value.toString()}
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
                className={'text-black dark:text-white bg-white focus:outline-none dark:bg-gray-600 dark:text-white rounded-sm shadow-sm focus:ring-2 transition-color border border-gray-300 hover:bg-gray-200 dark:focus-within:text-gray-400 dark:hover:text-white hover:text-black dark:hover:bg-gray-400 focus:text-black ' + (icon ? " p-2 pl-0 " : " p-2 px-3 ") + (error && ' text-red-500 border-red-500 hover:text-red-500')}
            />
            <HelperText error={error} success={success} helperText={helperText}/>
        </Wrapper>
    )
}

export default MessageInput
