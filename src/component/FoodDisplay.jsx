import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
  const {food_list}=useContext(StoreContext);

  return (
    <div className='mt-[30px]'>
      <h2 className='text-[max(2vw,30px)] font-semibold'>Top dishes near you</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[30px] row-gap-[50px]'>
        {food_list.map((item,i)=>{
          if(category=="All" || category===item.category){
            return <FoodItem 
            key={i}
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}
            />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay