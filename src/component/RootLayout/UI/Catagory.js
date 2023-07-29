import React from 'react';

const Catagory = () => {
  return (
    <div className='grid justify-center items-center'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         gap-7 items-center justify-center'>
        {
          catagory?.map((partsCatagory) => <>
            <div style={{
              height: "370px"
            }} className="card   hover:scale-105 transition duration-500 cursor-pointer object-cover h-[340spx] w-[240px] bg-base-100 shadow-xl">
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
    </div>
  );
};

export default Catagory;