import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
           
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;