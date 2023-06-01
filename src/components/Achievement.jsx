import React from 'react'
import achievement from '../assets/achievement.png'
import {SlGraduation} from 'react-icons/sl'
import {BsCameraVideo} from 'react-icons/bs'
import {IoIosPeople} from  'react-icons/io'


const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>

            <div className='flex flex-col justify-center'>
               

                <h1 className='md:leading-[72px]  md:text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievements</span></h1>
                
                <p className=' text-lg text-gray-600'>Various version have evolve over the years, sometimes by accident</p>
               <div className='grid grid-cols-2 py-16'>
                <div className=' py-6 flex '>
                    <div className='p-4  bg-[#E9F8F3]'> <SlGraduation
                    size={30}
                    style={{color:'#1A906B'}}
                     />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>500</h1>
                        <p className='text-[#6D737A]'>Instructor</p>
                    </div>
                   

                </div>
                <div className=' py-6 flex '>
                    <div className='p-4  bg-[#FFFAF5]'> <BsCameraVideo
                    size={30}
                    style={{color:'#FFC27A'}}
                     />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>30,00+</h1>
                        <p className='text-[#6D737A]'>Video</p>
                    </div>
                   

                </div>
                <div className=' py-6 flex '>
                    <div className='p-4  bg-[#FFEEF0]'> <SlGraduation
                    size={30}
                    style={{color:'#ED4459'}}
                     />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>40,000+</h1>
                        <p className='text-[#6D737A]'>Students</p>
                    </div>
                   

                </div>
                <div className=' py-6 flex '>
                    <div className='p-4  bg-[#F0F7FF]'> <IoIosPeople
                    size={30}
                    style={{color:'#0075FD'}}
                     />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>2,000,000+</h1>
                        <p className='text-[#6D737A]'>Users</p>
                    </div>
                   

                </div>
                </div> 
               
            </div>
          
            <img src={achievement}  className ="m-auto  md:order-last order-first" />

            

        </div>
    </div>
  )
}

export default Achievement