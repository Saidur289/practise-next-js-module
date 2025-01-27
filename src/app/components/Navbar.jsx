'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathname = usePathname()
    if(!pathname.includes('dashboard')){
        return (
            <div className='container mx-auto'>
                <nav className='flex justify-between px-4'>
                    <div>
                        <h1 className='text-xl font-bold'>Logo</h1>
                    </div>
                    <ul className='flex items-center gap-5'>
                        <li><Link href = {'/'}>Home</Link></li>
                        <li><Link href = '/about'>About</Link> </li>
                        <li><Link href = '/services'>Services</Link></li>
                    </ul>
                </nav>
            </div>
          )
    }
    else{
        return <></>
    }

 
}
