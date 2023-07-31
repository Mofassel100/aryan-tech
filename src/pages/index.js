
import RootLayout from '@/component/RootLayout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import Bannar from '@/component/RootLayout/UI/Bannar';
const HomePage = ({ catagory }) => {
  return (
    <div>

      <div>

        <Bannar />

      </div>
      <div className='my-5'>
        <h1 className='text-center text-4xl py-5 '>Aryan tech Product</h1>
        <div className='grid justify-center items-center'>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         gap-7 items-center justify-center'>
            {
              catagory?.map((partsCatagory) => <>
                <Link href={`/product/${partsCatagory?.category}`}>
                  <div style={{
                    height: "430px"
                  }} className="card   hover:scale-105 transition duration-500 cursor-pointer object-cover  w-[240px] bg-base-100 shadow-xl">

                    <div style={{
                      height: "180px"
                    }}>
                      <figure><Image width={240} height={180} className='hover:scale-125 transition duration-500 cursor-pointer' src={partsCatagory?.image} alt="Shoes" /></figure>

                    </div>

                    <div className="card-body">
                      <h2 className="text-xl ">
                        {partsCatagory.productName?.length > 40 ? partsCatagory?.productName.slice(0, 22) + "..." : partsCatagory?.productName}

                      </h2>
                      <p >Catagroy: <span className='text-green-400'>{partsCatagory?.category}</span></p>
                      <p>Status: {partsCatagory?.status ? "In Stock" : "Out of stock"}</p>
                      <p>Rating: {partsCatagory?.rating}</p>
                      <p>Price: {partsCatagory?.price}</p>
                      <div className="card-actions justify-end">

                      </div>
                    </div>

                  </div>
                </Link>
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout  >{page}
  </RootLayout>
}
export const getStaticProps = async () => {
  const res = await fetch("https://aryan-server.vercel.app/catagory")
  const data = await res.json()
  return {
    props: {
      catagory: data
    },
    revalidate: 5,

  }
}
