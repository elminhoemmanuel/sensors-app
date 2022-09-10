import React from 'react';
import Button from './common/Button';
import Back from './icons/Back';
import { useNavigate } from "react-router-dom";

type PageNavProps = {
    children?: React.ReactNode;
    handleBack?: () => void;
}

const PageNav = ({ children, handleBack }: PageNavProps) => {

    let navigate = useNavigate();

    return (
        <div className='flex items-center'>
            <Button className='p-2 rounded-sm' onClick={()=>navigate(`/`)} variant='secondary'>
                <Back />
            </Button>
            {children}
        </div>
    )
}

export default PageNav