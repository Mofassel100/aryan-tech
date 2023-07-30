import RootLayout from '@/component/RootLayout/RootLayout';
import Catagory from '@/component/RootLayout/UI/Catagory';
import Link from 'next/link';
import React from 'react';
const ProductDetails = ({ singleProduct }) => {
  console.log(singleProduct)
  return (
    <div className='py-2 mx-auto'>
      <div className='grid justify-center items-center'>
        <div className='grid grid-cols-12 md:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-7'>
          <div style={{
            height: '450px'
          }} className='col-span-12 md:col-span-1 border-b-2 lg:col-span-3 grid justify-center items-center'>
            <img style={{
              height: '430px'
            }} className='responsive transition duration-500 ease-in-out hover:scale-125' src={singleProduct?.image}></img>
          </div>
          <div className='col-span-12 hover:border rounded hover:border-green-500 md:col-span-1 lg:col-span-3 px-8 py-14'>
            <h1 className='text-2xl py-1'>{singleProduct?.productName
            } .</h1>
            <h3 className='text-xl py-2 text-emerald-500'>{singleProduct?.category}</h3>
            <p>Rating :<span className='text-xl text-green-600'> ***</span>{singleProduct?.rating}</p>
            <p>Status : {singleProduct.status ? "Sold In" : "Sould Out"}</p>
            <p>Reviews : {singleProduct?.reviews
            }
            </p>
            <p>price : {singleProduct?.price}</p>
            <div className='text-center my-5'>
              <Link className='btn text-white bg-green-500' href="">Add To Card</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto p-4 my-10'>
        <div className='grid justify-center items-center'>
          <div className=' border p-10 lg:max-w-[900px]'>
            <h1 className='text-3xl py-3'>Description : </h1>
            <p className='mb-4'>  {singleProduct?.Describtion}</p>
            <h1 className='text-3xl py-3'>Key Feature:</h1>
            <p className='mb-4'>  {singleProduct?.key_feature}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
export const getStaticPaths = async () => {
  const res = await fetch("https://aryan-server.vercel.app/product");
  const data = await res.json();
  const paths = data.map((category) => {
    console.log(category)
    return {
      params: {
        productDetailsId: category?._id?.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.productDetailsId;
  const res = await fetch(`https://aryan-server.vercel.app/productDetails/${id}`)
  const data = await res.json()
  // console.log(data)
  return {
    props: {
      singleProduct: data
    }
  }
}