import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#a2102d] flex flex-col items-center gap-[20px] px-[20px] py-[80px] pt-[8vw] mt-[100px]' id='contact-us'>
      <div className='w-full grid lg:grid-cols-[2fr_1fr_1fr] gap-[60px] grid-cols-1 md:gap-[35px]'>
        {/* Footer Left */}
        <div className='flex flex-col items-start gap-[20px]'>
          <img src={assets.logo} alt="" />
          <p>Thank you for visiting our website! We strive to provide the best quality products and services to meet your needs.</p>
          <div className='flex gap-4'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* Footer content right */}
        <div className='flex flex-col items-start gap-[20px]'>
          <h2 className='text-white font-semibold'>COMPANY</h2>
          <ul>
            <li className='mb-[10px] cursor-pointer'>Home</li>
            <li className='mb-[10px] cursor-pointer'>About Us</li>
            <li className='mb-[10px] cursor-pointer'>Delivery</li>
            <li className='mb-[10px] cursor-pointer'>Privacy policy</li>
          </ul>
        </div>
        {/* Footer content center */}
        <div className='flex flex-col items-start gap-[20px] mb-[10px]'>
          <h2 className='text-white font-semibold'>GET IN TOUCH</h2>
          <ul>
            <li>+91 6384499699</li>
            <li>chowtimecontact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] mx-[20px] my-0 bg-gray-300 border-none'/>
      <p className='text-center lg:text-center'>Copyright 2025 © ChowTime.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer