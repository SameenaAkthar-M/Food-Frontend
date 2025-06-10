import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

  return (
    <div className='w-[100%] m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] animating'>
      <div className='relative'>
        <img 
          className='w-[100%] rounded-[15px_15px_0px_0px]' 
          src={url+"/images/"+image}/>
        {
          !cartItems[id] ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>: <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img 
              className='w-[30px]' 
              onClick={()=>removeFromCart(id)} 
              src={assets.remove_icon_red}/>
            <p>{cartItems[id]}</p>
            <img 
              className='w-[30px]' 
              onClick={()=>addToCart(id)} 
              src={assets.add_icon_green} />
          </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-[10px]'>
          <p className='text-[18px] font-medium'>{name}</p>
          <img 
            className='w-[60px]' 
            src={assets.rating_starts} />
        </div>
        <p className='text-[#676767] text-[12px]'>{description}</p>
        <p className='text-[#DC143C] text-[20px] font-medium mx-[10px]'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem