import React from 'react';

type InputProps = {
    isBordered: boolean;
    className?: string;
} & React.ComponentProps<'input'>

const Input = ({ isBordered, className, ...rest }: InputProps) => {
    let borderStyle = isBordered ? "border border-gray-400" : ""
    return (
        <input className={`placeholder-gray-500 p-2 bg-transparent focus:outline-none ${borderStyle} ${className}`} {...rest} />
    )
}

export default Input