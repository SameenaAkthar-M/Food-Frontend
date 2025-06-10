import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate(); 

  return (
    <div className='mt-[100px]'>
      <div>
        {/* Titles of the cart */}
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center
         text-gray-500 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        
        {/* Food items which are added */}
        {food_list.map((item,i)=>{
          if(cartItems[item._id]>0){
            return <div key={item._id}>
              <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center 
              my-[10px] text-black'>
              <img className='w-[50px]' src={url+"/images/"+item.image}/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>{item.price*cartItems[item._id]}</p>
              <p className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
            </div>
          }
        })}
      </div>

      {/* Cart details */}
      <div className='mt-20 flex  gap-[max(12vw,20px)] flex-col-reverse lg:flex-row lg:justify-between'> 
        <div className='flex-1 flex flex-col gap-5'>
          <h2>Cart Total</h2>

          {/* Amount Section of the Cart */}
          <div>
          <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between font-bold'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0? 0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button 
            className='border-none text-white bg-[#DC143C] w-[max(15vw,200px)] px-3 rounded-[4px] cursor-pointer' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className='flex-1 justify-start'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input 
                className='bg-transparent border-none outline-none pl-[10px]' 
                type="text" 
                placeholder='Promo Code'/>
              <button 
                className='w-[max(10vw,150px)] px-[12px] py-[5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart