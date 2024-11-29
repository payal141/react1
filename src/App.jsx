
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import { Top } from './Components/Topproducts/Top';
import Sub from './Components/Subscribe/Sub';
import Texti from './Components/Testimonials/Texti';
import Footer from './Components/Footer/Footer';
import Kid from './Components/Kidf/Kid';

function App() {
  const [order, setOrder] = useState(false);
  
  const handleOrder = () => {
    setOrder((prev) => !prev);
  };
  
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrder} />
      <Hero handleOrderPopup ={handleOrder} /> 
      <Banner />
      <Products/>
      <Top handleOrderPopup={handleOrder}/>
      <Sub/>
      <Kid/>
      <Texti/>
      <Footer/>
   
   
    </div>
  );
}

export default App;






























