import React, { useRef } from 'react'
import HelperText from './InputParts/HelperText'
import Label from './InputParts/Label'
import { InputProps } from './InputParts/types'
import Wrapper from './InputParts/Wrapper'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function DateInput({
    name = "date_",
    label = "Date",
    id = "date",
    icon,
    error,
    success,
    helperText,
    required = false,
    spacing = false,
    autoComplete,
    type = "date",
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

    const inputRef = useRef(null)

    return (
        <Wrapper spacing={spacing}>
            <Label 
                label={label} 
                id={id} 
                required={required}
                error={error}
            />
            {/* taken from base input component */}
            <div className={'flex items-center bg-white dark:bg-gray-600 dark:text-white rounded-sm shadow-sm focus-within:ring-2 transition-colors text-gray-600 border border-gray-300 hover:bg-gray-200 dark:focus-within:text-gray-400 dark:hover:text-white hover:text-black dark:hover:bg-gray-400 focus-within:text-black' + (error && ' text-red-500 border-red-500 hover:text-red-500')}>
                {icon && <i onClick={()=>inputRef.current.focus()} className={icon+" p-2 pl-3 cursor-text"}></i>}
                <DatePicker
                    selected={value}
                    dateFormat="yyyy/MM/dd"
                    maxDate={type === "date_of_birth" && new Date(new Date().getFullYear() - 16, new Date().getMonth(), new Date().getDate())}
                    className={"w-full bg-transparent focus:outline-none text-black dark:text-white" + (icon ? " p-2 pl-0 " : " p-2 px-3 ")  + (error && ' text-red-500')}
                    //@ts-ignore
                    onChange={(date)=>{onChange({target:{value:date,name:name}})}}
                />
            </div>
            <HelperText error={error} success={success} helperText={helperText}/>
        </Wrapper>
    )
}

export default DateInput
