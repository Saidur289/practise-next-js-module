import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
             <h1 className='text-green-600 font-bold'>Dashboard</h1>
            </div>
            <div className='col-span-9'>
             {children}

            </div>

        </div>
    </div>
  )
}
