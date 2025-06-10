import React, { useState } from 'react'
import Header from '../component/Header';
import Menu from './Menu';
import FoodDisplay from '../component/FoodDisplay';
import ContactUs from '../component/contactus/ContactUs';

const Home = () => {

  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <ContactUs/>
    </div>
  )
}

export default Home;