import React from 'react'
import logo from '../assets/logo.svg'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {CiBasketball} from 'react-icons/ci'
import {SlSocialInstagram} from 'react-icons/sl'
import {CgBee} from 'react-icons/cg'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-6 max-[780px]:grid-cols-6  gap-8 max-w-[600px] '>
        
        <div className='col-span-2'>
        <img src = {logo}  className="h-[25px] "/>
        <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
        <h3 className='py-2 text-[#6D737A]'>Call: +237 650 953 098</h3>
        <h3 className='py-2 text-[#6D737A]'>Address: Buea,<br></br>SouthWest Region, Cameroon</h3>
        <h3 className='py-2 text-[#6D737A]'>Email: Nadinetarh@yahoo.com</h3>

        <div className='flex gap-4'>
            
        <div className='p-4 bg-[#E9F8F3] rounded-1xl'><BsFacebook  size={25} style={{color: '#4DC39E'}}/></div>
        <div className='p-4 bg-[#E9F8F3] rounded-1xl'><CiBasketball  size={25} style={{color: '#4DC39E'}}/></div>  
        <div className='p-4 bg-[#E9F8F3] rounded-1xl'><BsLinkedin  size={25} style={{color: '#4DC39E'}}/></div>
        <div className='p-4 bg-[#E9F8F3] rounded-1xl'><SlSocialInstagram  size={25} style={{color: '#4DC39E'}}/></div>
        <div className='p-4 bg-[#E9F8F3] rounded-1xl'><CgBee  size={25} style={{color: '#4DC39E'}}/></div>
        </div>
        
        </div>
        <div>
            <h3 className='text-2xl font-bold'>Explore</h3>
            <ul className='py-6 text-[#6D737A]'>
                <li className='py-2'>Home</li>
                <li className='py-2'>About</li>
                <li className='py-2'>Course</li>
                <li className='py-2'>Contact</li>
                <li className='py-2'>Blog</li>
            </ul>
        </div>
        <div>
            <h3 className='text-2xl font-bold'>Catergory</h3>
            <ul className='py-6 text-[#6D737A]'>
                <li className='py-2'>Design</li>
                <li className='py-2'>Development</li>
                <li className='py-2'>Marketing</li>
                <li className='py-2'>Business</li>
                <li className='py-2'>Lifestyle</li>
                <li className='py-2'>Photography</li>
                <li className='py-2'>Music</li>
            </ul>
        </div>
        <div className='max-[880px]:col-span-2'>
        <h3 className='text-2xl font-bold'>Subscribe</h3>
        <h3 className='py-2 text-[#6D737A]'>Address: Buea,<br></br>SouthWest Region, Cameroon</h3>
        <form className='py-4'>
            <input  className='bg-[#F2F3F4] p-4 w-full rounded' placeholder='Email here'/>
            <button className='max-[780px]:w-full px-5 py-3 my-4 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button> 
        </form>
        </div>
    
    </div>
       
       
 </div>

 )
}

export default Footer