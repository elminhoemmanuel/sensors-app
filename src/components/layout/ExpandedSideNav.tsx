import React from 'react';
import { navItems } from '../../data';
import { NavItem } from '../../interfaces/data';
import { SideNavProps } from './SideNav';
import Menu from '../icons/Menu';
import Picture from '../icons/Picture';
import Searchbar from '../Searchbar';

const ExpandedSideNav = ({ toggle }: SideNavProps) => {
    return (
        <div className='fixed top-0 left-0 w-52 h-screen bg-gray-200 flex flex-col z-40'>
            <div className='flex items-center bg-gray-600 h-20 px-3'>
                <button onClick={toggle} className='bg-gray-600 flex h-full items-center justify-center outline-none mr-6'>
                    <Menu />
                </button>
                <Picture variant='secondary' />
            </div>

            <Searchbar />

            <div className='flex flex-col pt-5'>
                {
                    navItems?.filter((each: NavItem) => each.id > 1).map((item: NavItem) => (
                        <button key={item.id} className="outline-none px-3 py-5 flex items-center">
                            <div>{item.icon}</div>
                            <p className='text-sm font-extrabold ml-2'>{item.name}</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default ExpandedSideNav