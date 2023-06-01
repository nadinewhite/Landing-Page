import React from 'react';
import heroImg from '../assets/heroImg.png';
import {AiOutlineSearch} from 'react-icons/ai'


const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
            <div>
                <p  className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>

                <h1 className='md:leading-[72px] py-4 md:text-5xl  font-semibold'>Access To <span className='text-[#20B486]'>5000+</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</h1>
                
                <p className='py-4 text-lg text-gray-600'>Various version have evolve over the years, sometimes by accident</p>
                
                <form className='bg-white border max-w-[700px] p-4 input-bx-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do you want to learn?'/>

                        <button>
                            <AiOutlineSearch
                                size={20}
                                className="icon"
                                style={{color:'#000'}}
                                />
                        </button>
                </form>
            </div>
            <img className ='md:order-last' src={heroImg} />

        </div>
    </div>
  )
}

export default Hero