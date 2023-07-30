import RootLayout from '@/component/RootLayout/RootLayout';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setComponent } from '../redux/feature/builderSlice';
import Image from 'next/image';


const SelectBuilder = ({ category }) => {
  const dispatch = useDispatch()
  const handelAddToCard = (product) => {
    dispatch(setComponent({ category: product?.category, component: product }))
  }
  return (
    <div className='grid justify-center items-center '>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-8 my-7'>
        {
          category?.map((product) =>
            <>

              <div style={{
                height: "450px"
              }} className="card   hover:scale-105 transition duration-500 cursor-pointer object-cover  w-[240px] bg-base-100 shadow-xl">
                <figure >
                  <div style={{
                    height: "300px ",
                  }} className='my-4'><Image height={300} width={238} className='hover:scale-125 p-12 transition duration-500 cursor-pointer h-full' src={product?.image} alt="Shoes" />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className=" ">
                    {product?.productName}
                  </h2>
                  <p >Catagroy: <span className='text-green-400'>{product?.category}</span></p>
                  <p>Status: {product?.status ? "In Stock" : "Out of stock"}</p>
                  <p>Rating: {product?.rating}</p>
                  <span>Price: {product?.price}</span>
                  <div className='text-center '>
                    <Link href={`/pc-builder`}> <button className='text-green-500 btn' onClick={() => handelAddToCard(product)}>Add To Card</button></Link>
                  </div>
                </div>

              </div>
            </>
          )
        }
      </div>
    </div>
  );
};
export default SelectBuilder;
SelectBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
export const getStaticPaths = async () => {
  const res = await fetch("https://aryan-server.vercel.app/catagory");
  const data = await res.json();
  const paths = data.map((category) => {
    return {
      params: {
        builderId: category?.category
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const category = context.params.builderId;
  const res = await fetch(`https://aryan-server.vercel.app/catagory/${category}`)
  const data = await res.json()
  return {
    props: {
      category: data
    }
  }

}