
import React from 'react'
import img1 from '../Image/Kids/shopping (1).webp';
import img2 from '../Image/Kids/shopping (2).webp';
import img3 from '../Image/Kids/shopping (3).webp';
import img4 from '../Image/Kids/shopping.webp';

const data = [
  {
    title: "Nuna Leaf Grow Baby Bouncer-Organic Jersey Knit Cotton Insert-3 Ergonomic Recline Positions-For Infants-Biscotti",   
    img: img1,
    MRP: "42,999"
  },
  {
    title: "Nuna Luun Baby Carrier-3 Carry Positions-Washable Infant Head Support-For 0 to 3Y (Upto 16Kg)-Caviar",
    img: img2,
    MRP: "34,999"
  },
  {
    title: "Nuna Cudl Clik Baby Carrier-4 Carry Positions-Innovative Leg Openings-0 to 3Y (Upto 18Kg)-Caviar",
    img: img3,
    MRP: "24,999"
  },
  {
    title: "Nuna Demi Grow Baby Stroller",
    img: img4,
    MRP: "50,999"
  }
];

const Kid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center text-center gap-5">
        {data.map((item, index) => (
          <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={index} className="space-y-3">
            <img 
              src={item.img} 
              alt="cover img" 
              className="h-[300px] w-[200px] object-cover rounded-md"
            />
            <div data-aos="zoom-in" className="text-center bg-white rounded-2xl p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-lg text-gray-800 font-medium">₹{item.MRP}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Kid;
