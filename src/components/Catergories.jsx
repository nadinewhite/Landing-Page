import React from 'react'
import CatergoryCard from './CatergoryCard'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5 } from 'react-icons/ti'
import {BsFillMicFill} from 'react-icons/bs'
import {FcBusiness, FcMoneyTransfer} from 'react-icons/fc'
import {GiLifeInTheBalance, GiMusicalScore, GiHealthPotion, GiBookshelf} from 'react-icons/gi'
import {MdPhotoCamera} from 'react-icons/md'
import {FiDatabase} from 'react-icons/fi'
import {BsLightbulb} from 'react-icons/bs'

const Catergories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto  max-w-[600px]'>
        <h1 className='md:leading-[72px]  md:text-3xl font-bold'> Most <span className='text-[#20B486]'>Popular Categories</span></h1>
        <p className=' text-lg text-gray-600'>Various version have evolve over the years, sometimes by accident</p>
          
          <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
            <CatergoryCard icons={<BsVectorPen
        size={25}
         />}
         title={'Design'}/>
            <CatergoryCard icons={<TiHtml5 
        size={25}
         />}
         title={'Development'}/>
            <CatergoryCard icons={<BsFillMicFill
        size={25}
         />}
         title={'Marketing'} />
            <CatergoryCard icons={<FcBusiness
        size={25}
         />}
         title={'Business'}/>

            <CatergoryCard icons={<GiLifeInTheBalance
        size={25}
         />}
         title={'LifeStyle'}/>
            <CatergoryCard icons={<MdPhotoCamera
        size={25}
         />}
         title={'Photography'}/>
            <CatergoryCard icons={<GiMusicalScore
        size={25}
         />}
         title={'Music'}/>
            <CatergoryCard icons={<FiDatabase
        size={25}
         />}
         title={'Data Science'}/>

            <CatergoryCard  icons={<BsLightbulb
         size={25}
         />}
         title={'Personal Develop'}/>
            <CatergoryCard  icons={<GiHealthPotion
         size={25}
         />}
         title={'Health & Fitness'}/>
            <CatergoryCard icons={<FcMoneyTransfer
        size={25}
         />}
         title={'Finance'}/>
            <CatergoryCard icons={<GiBookshelf
         size={25}
         />}
         title={'Teaching'}/>
            </div>  
            
        </div>
    </div>
  )
}

export default Catergories