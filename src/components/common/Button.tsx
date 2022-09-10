import React from 'react';

type ButtonProps = {
    variant: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<"button">, "children">

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
    let style = `focus:outline-none block ${variant === "primary" ? "bg-gray-600 text-white" : "bg-gray-200"} ${className}`
    return (
        <button className={style} {...rest} >{children}</button>
    )
}

export default Button