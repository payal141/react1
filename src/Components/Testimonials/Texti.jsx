
import React from 'react';
import Slider from 'react-slick';

const data = [
  {
    id: 1,
    name: "Victor",
    textt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vel quae quidem labore officiis maiores id, tempore possimus iusto tempora eius laudantium sunt quod fugit rem mollitia blanditiis aliquam laborum.",
    img: "https://picsum.photos/id/101/101"
  },
  {
    id: 2,
    name: "Satya",
    textt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vel quae quidem labore officiis maiores id, tempore possimus iusto tempora eius laudantium sunt quod fugit rem mollitia blanditiis aliquam laborum.",
    img: "https://picsum.photos/id/102/103"
  },
  {
    id: 3,
    name: "Virat Vikram",
    textt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vel quae quidem labore officiis maiores id, tempore possimus iusto tempora eius laudantium sunt quod fugit rem mollitia blanditiis aliquam laborum.",
    img: "https://picsum.photos/id/103/103"
  },
  {
    id: 4,
    name: "Kachra Seth",
    textt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vel quae quidem labore officiis maiores id, tempore possimus iusto tempora eius laudantium sunt quod fugit rem mollitia blanditiis aliquam laborum.",
    img: "https://picsum.photos/id/104/104"
  },
  {
    id: 5,
    name: "Lalit Burari",
    textt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vel quae quidem labore officiis maiores id, tempore possimus iusto tempora eius laudantium sunt quod fugit rem mollitia blanditiis aliquam laborum.",
    img: "https://picsum.photos/id/105/105"
  },
];

const Texti = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true, // Fixed typo: 'Infinite' -> 'infinite'
    speed: 500,
    slidesToScroll: 1, // Fixed typo: 'slideToscroll' -> 'slidesToScroll'
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [ // Fixed typo: 'resposive' -> 'responsive'
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className='h-20'></div>
      <div className="py-10 md-10">
        <div className="text-center md-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-2xl text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold">Testimonials</h1>
          <p data-aos="fade-up" className="text-l text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis culpa animi dolor soluta distinctio rerum neque officiis possimus cum sit maiores doloremque, quo asperiores voluptates nobis quibusdam itaque pariatur.
          </p>
        </div>
        <div className='h-20'></div>
        <div data-aos="zoom-in w-full">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="md-4">
                    <img src={item.img} alt={item.name} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-l dark:text-slate-300 text-gray-500">{item.textt}</p>
                      <h1 className="text-2xl font-bold dark:text-slate-300 text-black/80 dark:text-light">{item.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Texti;
