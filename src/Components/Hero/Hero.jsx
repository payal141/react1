
import React from 'react';
import image1 from '../Image/hero/women.png';
import image2 from '../Image/hero/shopping.png';
import image3 from '../Image/hero/sale.png';
import Slider from 'react-slick';

const imagelist = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all men's wear",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas asperiores aut esse eius sint, pariatur nemo accusamus autem amet magnam in nihil qui sunt quisquam alias, quasi libero repellat iusto!"
  },
  {
    id: 2,
    img: image2,
    title: "Upto 30% off on all women's wear",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas asperiores aut esse eius sint, pariatur nemo accusamus autem amet magnam in nihil qui sunt quisquam alias, quasi libero repellat iusto!"
  },
  {
    id: 3,
    img: image3,
    title: "Upto 70% off on product sale",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas asperiores aut esse eius sint, pariatur nemo accusamus autem amet magnam in nihil qui sunt quisquam alias, quasi libero repellat iusto!"
  },
];

export const Hero = ({ handleOrder }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imagelist.map((data) => (
            <div key={data.id} className="flex justify-center items-center">
              <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 data-aos="zoom-out" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">
                    {data.description}
                  </p>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                    <button
                      onClick={handleOrder}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      aria-label="Order Now"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={data.img} alt={`Slider Image ${data.id}`} className="w-full h-auto object-cover rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
