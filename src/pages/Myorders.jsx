import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/frontend_assets/assets';

const Myorders = () => {
  const [data,setData]=useState([]);
  const {url,token}=useContext(StoreContext);

  const fetchorders=async()=>{
    const res=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(res.data.data);
  }

  useEffect(()=>{
    if(token){
      fetchorders();
    }
  },[token])

  return (
    <div className='my-12 mx-0'>
      <h2>My Orders</h2>
      <div className='flex flex-col gap-5 mt-[30px]'>
        {data.map((order,i)=>{
          return <div key={i} className='grid grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] border-[1px] border-solid border-[#DC143C] my-orders-order'>
            <img src={assets.parcel_icon} alt="" className='w-[50px]'/>
            <p>{order.items.map((item,i)=>{
              if(i===order.items.length-1){
                return item.name+" x "+item.quantity
              }
              else{
                return item.name+" x "+item.quantity+", "
              }
            })}</p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span className='text-[#DC143C]'>&#x25cf;</span><b className='font-semibold text-[#454545]'>{order.status}</b></p>
            <button className='border-none py-[12px] rounded-[4px] cursor-pointer bg-[#e9baba]' onClick={fetchorders}>Track Order</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Myorders