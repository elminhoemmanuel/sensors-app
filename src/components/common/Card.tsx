import React from 'react';

type CardProps = {
    text: string;
    value: string;
    icon: React.ReactNode;
    addStyles?: string;
}

const Card = ({ text, value, icon, addStyles }: CardProps) => {
    return (
        <div className={`flex items-center justify-between ${addStyles}`}>
            <div>
                <h1 className='text-lg font-extrabold'>{text}</h1>
                <p>{value}</p>
            </div>
            {icon}
        </div>
    )
}

export default Card