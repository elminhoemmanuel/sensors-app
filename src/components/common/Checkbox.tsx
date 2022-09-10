import React from 'react';

type InputProps = {
    isChecked: boolean;
    id: string;
    label: string;
} & React.ComponentProps<"input">

const Checkbox = ({ isChecked, id, label, ...rest }: InputProps) => {
    return (
        <div className="checkbox-wrapper flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={isChecked}
                {...rest}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox