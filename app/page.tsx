import React from 'react'
import Homepage from '@/components/homepage'


function MainPage() {
  return (

    <>
        <div className='flex justify-center p-20'>
        <h1 className='text-8xl transition duration-300 hover:scale-110 cursor-pointer'>
            Search Your Weather
        </h1>
    </div>
        <div><Homepage></Homepage></div>
    </>

  )
}

export default MainPage