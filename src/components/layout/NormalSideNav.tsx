import React from 'react';
import { navItems } from '../../data';
import { NavItem } from '../../interfaces/data';
import { SideNavProps } from './SideNav';
import Menu from '../icons/Menu';

const NormalSideNav = ({ toggle }: SideNavProps) => {
  return (
    <div className='fixed top-0 left-0 w-16 h-screen bg-gray-200 flex flex-col z-40'>
        <button onClick={toggle} className='bg-gray-600 flex items-center justify-center h-20 outline-none'>
            <Menu/>
        </button>
        <div className='flex flex-col pt-5'>
            {
                navItems?.map((item: NavItem)=>(
                    <button key={item.id} className="outline-none px-3 py-5 flex items-center justify-center">
                        {item.icon}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default NormalSideNav