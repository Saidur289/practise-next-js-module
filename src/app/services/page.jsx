import Link from 'next/link'
import React from 'react'

export default function ServicesPage() {
    const data = [
        {id: 1, service: 'service description 1'},
        {id: 2, service: 'service description 2'},
        {id: 3, service: 'service description 3'},
        
    ]
  return (
    <div>
        <h1 className='mb-3'>ServicesPage</h1>
        <div className='flex justify-evenly mt-5'>
            {
                data.map((d) => <Link key={d.id} href={`/services/${d.id}`}><div>{d.service}</div></Link>)
            }
        </div>
    </div>
  )
}
