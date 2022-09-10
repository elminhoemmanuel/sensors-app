import React from 'react';

type SectionHeaderProps = {
    hasBorder: boolean;
    hasIcon: boolean;
    icon?: React.ReactNode;
    text: string;
    className?: string;
}

const SectionHeader = ({ hasBorder, hasIcon, icon, text, className }: SectionHeaderProps) => {

    let style = `${className} ${hasBorder ? 'border border-gray-300' : ''} flex items-center justify-between`

    return (
        <div className={style}>
            <h1 className='text-lg font-extrabold'>{text}</h1>
            { hasIcon ? icon : null }
        </div>
    )
}

export default SectionHeader