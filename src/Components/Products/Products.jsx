import React from 'react'
import img1 from '../Image/women/women.png';
import img2 from '../Image/women/women2.jpg';
import img3 from '../Image/women/women3.jpg';
import img4 from '../Image/women/women4.jpg';
import {FaStar} from 'react-icons/fa6'

const Productsdata=[
  {
    id:1,
    img:img1,
    title:"woman Ethnic",
    rating:5.0,
    color:"white",
    aosDelay:"0",
  },
  { 
    id:2,
    img:img2,
    title:"woman western",
    rating:4.0,
    color:"white",
    aosDelay:"200",
  },
  {
    id:3,
    img:img3,
    title:"goggles",
    rating:3.0,
    color:"white",
    aosDelay:"300",
  },
  { id:4,
    img:img4,
    title:"woman Ethnic",
    rating:4.5,
    color:"yello",
    aosDelay:"400",
  },

  {
    id:5,
    img:img2,
    title:"woman Ethnic",
    rating:5.0,
    color:"black",
    aosDelay:"0",
  },
]

const Products = ({handleorder}) => {
  return (
    <>
    <div className='h-20'></div>
      <div className='mt-14 md-12'>
        <div className='container text-center'>
          <div className='text-center md-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-l text-primary'>top selling produce for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-l text-gray-400 '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum numquam est quis culpa? Voluptas ipsa nam, 
              </p> 
          </div>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center text-center gap-5'>
              {Productsdata.map((data)=>(
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                  <img  src={data.img} alt='cover img' className='h-[300px] w-[200px]  object-cover rounded-md'/>
                  <div  data-aos="zoom-in" className='text-center bg-white rounded-2xl '>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 '>{data.color}</p>
                  <div className='flex items-center gap-1 '>
                    <FaStar className='text-yellow-400'/>
                    <span>{data.rating}</span>
                  </div>


                  </div>
                </div>
              ))}
            </div>
            <div className='flex  justify-center items-center'>
              <button className='text-center mt-8 cursor-pointer bg-primary text-white py-3 px-8 rounded-md  group-hover:text-primary group-hover:bg-white ' onClick={handleorder}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products