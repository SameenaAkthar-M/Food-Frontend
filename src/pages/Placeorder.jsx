import {useEffect, useState,} from 'react'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Placeorder = () => {
  const navigate=useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:'',
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangehandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder=async(e)=>{
    e.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let res=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(res.data.success){
      navigate('/payment-success')
    }
    else{
      alert("Error");
    }
  }

  const handleClick=()=>{
    navigate('/payment-success');
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart');
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px]'>
      {/* placeorder left */}
      <div className='w-full max-w-[max(30%,500px)] place-order'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='multi-valued'>
          <input required name='firstName' onChange={onChangehandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangehandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' value={data.email} onChange={onChangehandler} type="email" placeholder='Email address'/>
        <input required name='street' value={data.street} onChange={onChangehandler} type="text" placeholder='Street'/>
        <div className='multi-valued'>
          <input required name='city' onChange={onChangehandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' value={data.state} onChange={onChangehandler} type="text" placeholder='State'/>
        </div>
        <div className='multi-valued'>
          <input required name='zipcode' onChange={onChangehandler} value={data.zipcode} type="text" placeholder='Zip code'/>
          <input required name='country' onChange={onChangehandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangehandler} value={data.phone} type="text" placeholder='Phone'/>
      </div>
      {/* Place order right */}
      <div className='w-full max-w-[40% 500px]'>
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
            type="submit"
            className='border-none text-white w-[max(15vw,200px)] py-3 rounded-[4px] cursor-pointer mt-[30px] bg-[#DC143C]'
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder