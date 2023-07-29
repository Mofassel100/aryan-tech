import RootLayout from '@/component/RootLayout/RootLayout';

import Link from 'next/link';
import dynamic from "next/dynamic";
import { useSelector } from 'react-redux';

const PcBuilder = ({ catagory }) => {
  const builderProduct = useSelector((state) => state?.builderSlice)

  const SelecteBuilderComponet = dynamic(() => import("@/component/SelecteBuilderComponet"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
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