'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './Header';

export default function NavbarWrapper() {
    const pathname = usePathname();
    if(pathname === '/') return null;
    return <Header />;
}
