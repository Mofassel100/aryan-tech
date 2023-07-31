import Image from 'next/image';
import React from 'react';
import image from "@/assets/image/banner/leptop-5.webp"

const Bannar = () => {
  return (
    <>

      <div style={{
        height: "",
        margin: "7px"
      }} className='border carousel decoration-slice rounded lg:max-h-[800px]'>
        <h1>dklkj</h1>
        <div>
          <Image src={image} height={300}
            width={800} responsive></Image>

        </div>


      </div>



    </>

  );
};

export default Bannar;