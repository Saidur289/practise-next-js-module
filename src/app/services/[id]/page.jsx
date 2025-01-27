import React from 'react'

export default async function ServiceDetails({params}) {
    const data = [
        {id: 1, service: 'service description 1'},
        {id: 2, service: 'service description 2'},
        {id: 3, service: 'service description 3'},
        
    ]
    const id = (await params).id 
    const singleData = data.find((d) => d.id == id)
    if(singleData){
        return (
            <div className='mt-5'>
                <h1>Service Number: {id}</h1>
                <p className='mt-3'>{singleData.service}</p>
            </div>
          )
    }
    else{
        return <p>Not Found This Service</p>
    }


 
}
