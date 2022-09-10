import React from 'react';
import ExpandedSideNav from './ExpandedSideNav';
import NormalSideNav from './NormalSideNav';

 export type SideNavProps = {
    expand?: boolean;
    toggle: ()=>void;
}

const SideNav = ({ expand, toggle }: SideNavProps) => {
  return (
    <div className=''>
        {expand ? <ExpandedSideNav toggle={toggle} /> : <NormalSideNav toggle={toggle} />}
    </div>
  )
}

export default SideNav