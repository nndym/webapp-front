export interface InputProps {
    name?: string,
    id?: string,
    icon?: string,
    error?: string | boolean,
    success?: boolean,
    required?: boolean,
    toggle?: boolean,
    type?: string,
    autoComplete?: string,
    label?: string,
    placeholder?: string,
    value?: string | Date | number | boolean,
    bar?: boolean,
    helperText?: string,
    spacing?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onDoubleClick?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onContextMenu?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseUp?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseOver?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseOut?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onMouseMove?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onDragStart?: (e: React.DragEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onDragEnd?: (e: React.DragEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onDragEnter?: (e: React.DragEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}