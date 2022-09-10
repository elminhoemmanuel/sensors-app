import React from 'react';

type InputProps = {
    options: string[];
    addStyles?: string;
} & React.ComponentProps<'select'>

const Select = ({ options, addStyles, ...rest }: InputProps) => {
    return (
        <select className={`p-2 bg-transparent focus:outline-none border border-gray-400 ${addStyles}`} {...rest}>
            {
                options?.map((item)=>(
                    <option key={item} value={item} >{item}</option>
                ))
            }
        </select>
    )
}

export default Select