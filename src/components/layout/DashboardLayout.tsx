import React, { useState } from 'react';
import Footer from './Footer';
import SideNav from './SideNav';
import TopNav from './TopNav';

type DashboardLayoutProps = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [expandSideNav, setExpandSideNav] = useState(false);
    const toggleSideNav = () => setExpandSideNav(!expandSideNav) 
    return (
        <div className='bg-white text-gray-500 pl-16 text-sm main relative'>
            <TopNav />
            <SideNav expand={expandSideNav} toggle={toggleSideNav} />
            {children}
            <Footer />
        </div>
    )
}

export default DashboardLayout