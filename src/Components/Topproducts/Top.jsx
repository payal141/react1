
import React from 'react'
import img from '../Image/shirt/shirt.png'
import img2 from '../Image/shirt/shirt2.png'
import img3 from '../Image/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const productdata = [
  {
    id: 1,
    img: img, 
  
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, nemo fuga nam consequuntur quos animi perspiciatis enim voluptate pariatur aliquid in et dolorem repellendus, facilis atque! Consequatur nostrum et corporis?"
  },
  {
    id: 2,
    img: img2,
    title: "Printed",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, nemo fuga nam consequuntur quos animi perspiciatis enim voluptate pariatur aliquid in et dolorem repellendus, facilis atque! Consequatur nostrum et corporis?"
  }, 
  {
    id: 3,
    img: img3,
    title: "Women Shirt",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, nemo fuga nam consequuntur quos animi perspiciatis enim voluptate pariatur aliquid in et dolorem repellendus, facilis atque! Consequatur nostrum et corporis?"
  },
]

export const Top = ({ handleOrderPopup }) => {
  return (
    
    <div className="container">
    <div className='h-20'></div>
      <div className="mg-24 text-center">
        <p data-aos="fade-up" className="text-xl text-primary">Top Rated Products</p>
        <h1 data-aos="fade-up" className="text-2xl font-bold">Best Products</h1>
        <p data-aos="fade-up" className="text-l text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eligendi quibusdam, consequatur saepe doloremque totam. Inventore non ratione voluptates suscipit animi quas iusto nihil incidunt consectetur temporibus fugit, ut reprehenderit!
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {productdata.map((data) => (
              <div key={data.id} data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                <img src={data.img} alt={data.title} className="w-full rounded-t-2xl" />
                <div className="w-full flex items-center justify-center gap-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold mt-2">{data.title}</h1>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                <button 
                  onClick={() => handleOrderPopup(data.id)} 
                  className="bg-primary hover:bg-primary-dark text-white mt-4 px-4 py-2 rounded-md focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
