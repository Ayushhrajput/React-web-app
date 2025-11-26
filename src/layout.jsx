import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBox from './components/headerBox';
import FooterBox from './components/footerBox';

function Layout() {
    return (
        <>
            <HeaderBox />
            <Outlet />
            <FooterBox />
        </>
    );
}

export default Layout;