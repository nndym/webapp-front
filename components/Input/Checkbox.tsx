import React from 'react'
import HelperText from './InputParts/HelperText'
import Label from './InputParts/Label'
import { InputProps } from './InputParts/types'
import Wrapper from './InputParts/Wrapper'

function CheckboxInput({
    name,
    label,
    id,
    bar = false,
    icon,
    error,
    helperText,
    required = false,
    spacing = false,
    value,
    success,
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
            <div className="flex">
                <div className='mr-1'>
                    <input
                        className='m-1 ml-0 h-3 w-3'
                        type="checkbox"
                        id={id} 
                        //@ts-ignore
                        onChange={(e)=>{onChange({target:{value:e.target.checked.toString(),name:name}})}}
                        name={name} 
                    />
                </div>
                <Label 
                    label={label} 
                    noSpace
                    id={id} 
                    required={required}
                    error={error}
                />
            </div>
            <HelperText error={error} helperText={helperText} success={success}/>
        </Wrapper>
    )
}

export default CheckboxInput
