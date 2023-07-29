import RootLayout from '@/component/RootLayout/RootLayout';
import SelecteBuilderComponet from '@/component/SelecteBuilderComponet';
import Link from 'next/link';
import React, { Children } from 'react';
import { useSelector } from 'react-redux';

const PcBuilder = ({ catagory }) => {
  const builderProduct = useSelector((state) => state?.builderSlice)
  const { RAM } = builderProduct
  console.log(RAM)
  return (
    <div>
      <h1 className='text-center text-4xl py-5 '>PC Builder</h1>
      <p className='text-center'>Select Your Componets</p>
      <div>
        <div className='lg:w-[700px] lg:mx-auto'>
          <div className='flex justify-between p-2 bg-slate-600 text-white'> <h1>Your Build Pc</h1> <p>**</p></div>
          <div className='border '>
            {
              catagory?.map((product) =>
                <>

                  <div style={{ height: "180px" }} className='border my-2 px-4 py-2 justify-between  rounded' >
                    <div style={{ height: "110px" }} className='border my-2 px-4 py-2 justify-between flex rounded'>
                      <div className='flex items-center justify-center gap-x-6'>
                        <div style={{
                          height: "90px",
                          width: "80px"
                        }}><img src={product?.image} alt="" /> </div>
                        <h1>{product?.category}</h1>
                      </div>
                      { }

                      <div className='flex justify-center items-center'>
                        <Link className='btn text-white bg-green-500' href={`/pc-builder-select/${product?.category}`}>Select</Link>
                      </div>
                    </div>
                    <SelecteBuilderComponet builderProduct={builderProduct} category={product?.category} />
                  </div>
                </>)
            }


          </div>
        </div>

      </div>
      {/* <div className='grid justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         gap-7 items-center justify-center'>
          {
            catagory?.map((partsCatagory) => <>

              <div style={{
                height: "370px"
              }} className="card   hover:scale-105 transition duration-500 cursor-pointer object-cover  w-[240px] bg-base-100 shadow-xl">

                <figure><img className='hover:scale-125 transition duration-500 cursor-pointer' src={partsCatagory?.image} alt="Shoes" /></figure>

                <div className="card-body">
                  <h2 className="text-xl ">
                    {partsCatagory.productName}

                  </h2>
                  <p >Catagroy: <span className='text-green-400'>{partsCatagory?.category}</span></p>
                  <span>Price: {partsCatagory?.price}</span>
                  <div className="card-actions justify-end">

                  </div>
                </div>

              </div>

            </>)
          }
        </div>
      </div> */}
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
export const getStaticProps = async () => {
  const res = await fetch("https://aryan-server.vercel.app/catagory")
  const data = await res.json()
  return {
    props: {
      catagory: data
    }
  }
}