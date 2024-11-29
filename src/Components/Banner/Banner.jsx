
import React from 'react';
import Bannerimg from "../Image/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Benefit = ({ Icon, text }) => (
  <div data-aos="fade-up" className='flex items-center gap-4'>
    <Icon className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
    <p>{text}</p>
  </div>
);

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          <div data-aos="zoom-in">
            <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={Bannerimg} alt="Delicious food banner" />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale up to 50% off</h1>
             <p data-aos="fade-up" className='text-gray-500 tracking-wide leading-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quas! Fuga cumque adipisci nostrum, odit unde reiciendis temporibus atque cupiditate corrupti eum amet delectus minima eveniet a dolor dolorum facere magnam facilis!
            </p> 
            <div className='flex flex-col gap-4'>
              <Benefit Icon={GrSecure} text="Quality Products" />
              <Benefit Icon={IoFastFood} text="Fast Delivery" />
              <Benefit Icon={GiFoodTruck} text="Easy Payment Methods" />
              <Benefit Icon={GiFoodTruck} text="Get Offers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
