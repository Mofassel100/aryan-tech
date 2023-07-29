import React from 'react';

const SelecteBuilderComponet = ({ builderProduct, category }) => {
  const data = builderProduct[category]
  console.log(data)
  return (
    <div className='flex justify-center items-center '>
      {
        category && <>
          <div className='flex justify-between '>
            <div style={{
              height: "50px",
              width: "50px"
            }} className=''><img src={data?.image} alt="" /></div>

            <div className='pl-10 '>
              <h1>{data?.category}</h1>
              <h1>{data?.productName.length > 40 ? data?.productName.slice(0, 20) + "..." : data?.productName}</h1>
            </div>


          </div>
        </>
      }
    </div>
  );
};

export default SelecteBuilderComponet;