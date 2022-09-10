import React from 'react';
import Picture from '../icons/Picture';
import User from '../icons/User';

const TopNav = () => {
    return (
        <nav className='border-y border-gray-300 px-8 py-2 h-20 flex items-center justify-between'>
            <Picture variant='primary' />
            <div className='flex items-center cursor-pointer'>
                <div className='text-right'>
                    <h2 className='text-2xl font-extrabold'>JANE DOE</h2>
                    <p className=''>Acount Settings</p>
                </div>
                <div className='pt-2 ml-4'>
                    <User />
                </div>
            </div>
        </nav>
    )
}

export default TopNav