import React from 'react'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='max-w-[1800px] h-max-[362px] mx-auto grid lg:grid-cols-4 sm:grid-cols-1 gap-5 py-5'>
        <div className='flex align-middle m-auto justify-center items-center'> <img className='lg:h-20 sm:h-14 '  src="./1.jpeg" alt="food-truck-img" /> </div>
        <div className='sm:text-left lg:text-center sm:p-5'>
            <p className='text-[#334580] text-2xl font-semibold lg:m-5 sm:m-2'>Contact Us</p>
            <p className='lg:m-5 sm:m-2'>lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className='lg:m-5 sm:m-2'>example2020@gmail.com</p>
            <p className='lg:m-5 sm:m-2'>(904) 443-0343</p>
        </div>
        <div className='sm:text-left lg:text-center sm:p-5'>
            <p className='text-[#334580] text-2xl font-semibold sm:m-2'>More</p>
            <p className='lg:m-5 sm:m-2'>About Us</p>
            <p className='lg:m-5 sm:m-2'>Products</p>
            <p className='lg:m-5 sm:m-2'>Carrer</p>
            <p className='lg:m-5 sm:m-2'>Contact Us</p>
        </div>
        <div className='text-center'>
            <p className='text-[#334580] text-2xl font-semibold m-5'>Social Link</p> 
            <div className='flex space-x-10 justify-center m-5'>
            <AiOutlineInstagram size='1.5rem'/>
            <AiOutlineTwitter size='1.5rem'/>
            <BiLogoFacebook size='1.5rem'/>
            </div>
            <p className='m-16'>@2022 Food Truck Example</p>
        </div>
    </div>
  )
}

export default Footer
