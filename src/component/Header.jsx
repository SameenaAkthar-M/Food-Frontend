import React from 'react'

const Header = () => {
  return (
    <div className="relative mx-auto my-[30px] bg-[url('/m1.jpg')] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden h-[34vw] md:h-[38vw] sm:h-[50vw]">
      <div className="absolute inset-0 bg-black opacity-15 rounded-lg"></div>
        <div className='animate-custom absolute flex flex-col items-start gap-[1.5vw] bottom-[10%] left-[6vw] max-w-[50%] md:max-w-[45%] sm:max-w-[55%]'>
          <h2 className='font-semibold text-white text-[max(4vw,22px)]'>Order your favourite food here</h2>
          <p className='hidden md:block text-white text-[1vw]'>Indulge in a wide variety of mouth-watering dishes, carefully prepared by top chefs. From comforting classics to trendy new flavors, our menu has something for every taste. With quick delivery and easy-to-use features, satisfying your cravings has never been simpler or more delicious!</p>
          <button className='py-[10px] px-[15px] bg-white text-[max(1.5vw,8px)] text-[#747474] rounded-[50px] 
          sm:py-[1vw] sm:px-[2vw] hover:bg-gray-200 transition-all'>View Menu</button>
      </div>
    </div>
  )
}

export default Header