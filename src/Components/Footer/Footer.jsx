import React from 'react'
import { FiShoppingBag} from "react-icons/fi";
import { FaMapLocation, FaMapLocationDot} from "react-icons/fa6";
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,


} from "react-icons/fa";
import { IoCall} from "react-icons/io5";

const footerlink=[
    {
        title:"home",
        link:"/#",

    },
    {
        title:"about",
        link:"/about",

    },
 {
        title:"contact",
        link:"/contact",

    },
 {
        title:"Blog",
        link:"/blog",

    },

]
const Footer = () => {
  return (
    
<>  <div className='h-20'></div>
    <div className='text-white bg-[#212529]'>
    <div className='container'>
    <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
    <div className='py-8 px-4'>
    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify md-3 flex items-center gap-1'>

        <FiShoppingBag size="30"/>
        ShopMe
    </h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum facilis maxime in modi, illum ab, maiores doloremque harum amet ducimus, reiciendis fugit ipsam excepturi aliquam nobis laudantium laboriosam reprehenderit quis?
        
    </p>

    </div>
    <div className=''>
    <div className='py-8 px-4'>
    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify md-3'>Important  Links</h1>
    <ul className='flex flex-col gap-3'>
        {footerlink.map((link)=>(
            <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                {link.title}
            </li>
        ))}
    </ul>

    </div>

    </div>
        <div>
            <div className='py-8 px-4'>
         
            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify md-3'>Important  Links</h1>
            <ul className='flex flex-col gap-3'>
        {footerlink.map((link)=>(
            <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                 {link.title}
            </li>
        ))}
    </ul>

            </div>
        </div>
        <div>
            <div className='flex items-center gap-3 mt-6'>
            <a href='#'>
                    <FaInstagram className='text-3xl'/>
                </a> <a href='#'>
                    <FaLinkedin className='text-3xl'/>
                </a> <a href='#'>
                    <FaFacebook className='text-3xl'/>
                </a>
            </div>
          <div className='mt-6'>
          <div className='flex items-center gap-3'>
            <FaMapLocationDot />
            <p> Indore,Madhya Pardesh </p>
          </div>
          <div  className='flex items-center gap-3 mt-3'>
            <IoCall />
            <p>+91 1234 4534</p>
          </div>

          </div>

        </div>

    </div>

    </div>

    </div>
</>

  )
}

export default Footer
