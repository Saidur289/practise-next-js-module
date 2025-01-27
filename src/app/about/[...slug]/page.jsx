import React from 'react'

export default async function SlugPage({params}) {
    const slug = (await params).slug
    console.log(slug);
  return (
    <div>SlugPage</div>
  )
}
