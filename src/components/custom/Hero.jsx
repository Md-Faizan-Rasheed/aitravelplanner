import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex  flex-col gap-12 w-[70%]  justify-center items-center mx-auto sm:pt-16 md:pt-16'>
      <h1 className='text-black font-extrabold text-5xl flex-wrap md:w-full mt-4 sm:w-[40%] leading-[70px] text-center'><span className='text-orange-500'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>

      <p className='text-center sm:w-[40%] md:w-full text-lg text-gray-500'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

<Link to="/create-trip">      <button className='bg-black py-2 px-3 text-white rounded-md'>Get Started, It's Free</button>
</Link>
      <div className='mt-24 flex flex-col gap-12 w-[60%]'>
        <img className='rounded-md'  src="https://images.unsplash.com/photo-1724786594231-c8bfd41c0bfa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="ew2" />
        <img className='rounded-md' src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyaXAlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D" alt="igm" />
        <img className='rounded-md'  src="https://images.unsplash.com/photo-1721641843496-3c8c60eab024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" alt="jgm3" />
       <img className='rounded-md'  src="https://images.unsplash.com/photo-1501966077470-d1ebf6cd871a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyaXAlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D" alt="agt4" />
      </div>
    </div>
  )
}

export default Hero
