'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
    const router = useRouter()
    const isLoggedIn = true 
    const handleNavigation = () => {
        if(isLoggedIn) return router.push('/about/address')
            return router.push('/')
    }
  return (
    <div>
        <h1 className='text-3xl mb-3'>AboutPage</h1>
        <br />
        <button onClick={handleNavigation} className='px-5 py-3 bg-green-500 rounded-sm'>Address</button>
    </div>
  )
}
