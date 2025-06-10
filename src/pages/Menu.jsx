import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets.js'
import '../index.css'

const Menu = ({category,setCategory}) => {

  return (
    <div className='flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] text-[max(2vw,30px)] font-semibold'>Explore our menu</h1>
      <p className=' text-[#3e3d3d]'>Every bite tells a story. Explore our carefully curated menu and embark on a culinary journey like no other!</p>
      <div className='flex justify-between items-center gap-[30px] text-center mx-[20px] my-[0px] overflow-x-scroll hide-scrollbar'>
        {menu_list.map((item,i)=>{
          return (
            <div key={i} onClick={()=>setCategory((prev)=>(prev===item.menu_name?"All":item.menu_name))}>
              <img className={category===item.menu_name?'border-[4px] border-solid border-[#DC143C] menu-item p-[2px]':"menu-item"}src={item.menu_image} alt=""/>
              <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default Menu;