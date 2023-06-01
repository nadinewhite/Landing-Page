import React from 'react'
import cta from '../assets/cta.png'


const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px]  items-center'>
    <img src={cta}  className="w-[650px] mx-auto" /> 

        <div>
           

            <h1 className='md:leading-[72px] py-4 md:text-5xl  font-semibold'>Join <span className='text-[#20B486]'>Worlds</span> <span className='text-[#20B486]'> largest</span> learning Platform today</h1>
            
            <p className='py-4 text-lg text-gray-600'>Start learning free courses by registering</p>
            
            <button className='max-[780px]:w-full px-8 py-5 my-4 rounded-md bg-[#20B486] text-white font-bold'>Sign Up Here for Free</button> 
        </div>
       

    </div>
</div>
  )
}

export default CTA