import Image from 'next/image';
import React from 'react';
import image from "@/assets/image/banner/leptop-5.webp"
import image3 from "@/assets/image/banner/leptop-3.webp"
import image4 from "@/assets/image/banner/leptop-4.webp"

const Bannar = () => {
  return (
    <>

      <div style={{
        height: "800px"
      }} className='carousel decoration-slice rounded grid lg:grid-cols-12 mx-auto  grid-cols-1 p-5 my-3 justify-center  '>
        <div className='grid lg:col-span-8 '>
          <Image src={image} height={250}
            width={800} responsive></Image>

        </div>
        <div className='grid py-2 lg:col-span-4  lg:grid-cols-1  grid-cols-2 gap-x-2 gap-y-4 justify-center '>
          <div className='max-h-[190px]'>
            <Image responsive src={image3} />
          </div>
          <div className='max-h-[190px]'>
            <Image responsive src={image4} />
          </div>


        </div>


      </div>



    </>

  );
};

export default Bannar;