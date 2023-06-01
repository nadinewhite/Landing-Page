import React from 'react'
import avatar from '../assets/avatar.png'
import  quotationMark from '../assets/quotationMark.png'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 border  rounded-3xl shadow-xl my-8 mx-2'>
        <div className='flex justify-between'>
        <div className='flex gap-4'>
            <img src={avatar} />
            <div>
                <h1>Nadine Hull</h1>
                <p>Sfoware Developer</p>
                </div>
                
        </div>
        <img  className='h-8' src={quotationMark} />
        
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>Hello i am a student who major in computer science, my passion is to become a Software developer 
                in the future. Probably work for companies like Google, Microsoft and Apple. I am a third year student 
                that would be graduation this coming year and ready to apply my skills in what i have learned.
            </h3>
        </div>
    </div>
  )
}

export default FeedbackCard