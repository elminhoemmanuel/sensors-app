import React from 'react';
import Input from './common/Input';
import Search from './icons/Search';

const Searchbar = () => {
  return (
    <div className='px-3 pt-7'>
        <div className='border border-gray-500 flex items-center px-2'>
            <Search className='w-8 h-8 text-gray-500' />
            <Input placeholder='Search...' isBordered={false} />
        </div>
    </div>
  )
}

export default Searchbar