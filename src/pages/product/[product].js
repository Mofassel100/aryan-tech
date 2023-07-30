import RootLayout from '@/component/RootLayout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
const Product = ({ category }) => {
  return (
    <div className='grid justify-center items-center '>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-8 my-7'>
        {
          category?.map((product) =>
            <>
              <Link href={`/productDetails/${product?._id}`}>
                <div style={{
                  height: "460px"
                }} className="card   hover:scale-105 transition duration-500 cursor-pointer object-cover  w-[240px] bg-base-100 shadow-xl">
                  <div style={{
                    height: "180px",
                  }} className=''>
                    <figure >
                      <Image height={180} width={240} className='hover:scale-125  transition duration-500 cursor-pointer  h-full' src={product?.image} alt="Shoes" />
                    </figure>
                  </div>
                  <div className="card-body">
                    <h2 className=" ">
                      {product?.productName.length > 40 ? product?.productName.slice(0, 20) + "..." : product?.productName}
                    </h2>
                    <p >Catagroy: <span className='text-green-400'>{product?.category}</span></p>
                    <p>Status: {product?.status ? "In Stock" : "Out of stock"}</p>
                    <p>Rating: {product?.rating}</p>
                    <p>Price: {product?.price}</p>

                    <div className='text-center'>
                      <button className='text-white bg-green-500 btn' >Details</button>
                    </div>
                  </div>

                </div>
              </Link >

            </>
          )
        }
      </div>
    </div>
  );
};

export default Product;
Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
export const getStaticPaths = async () => {
  const res = await fetch("https://aryan-server.vercel.app/catagory");
  const data = await res.json();
  const paths = data.map((category) => {
    return {
      params: {
        product: category?.category
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const category = context.params.product;
  const res = await fetch(`https://aryan-server.vercel.app/catagory/${category}`)
  const data = await res.json()
  return {
    props: {
      category: data
    }
  }

}
