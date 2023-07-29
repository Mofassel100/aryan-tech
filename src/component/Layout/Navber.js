import Link from 'next/link';
import React from 'react';

const Navber = () => {
  const myProduct = <React.Fragment>
    <li><Link className='hover:text-green-500' href={`/product/Motherboard`}>MotherBoard</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/Processor`}>Processor</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/RAM`}>RAM</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/Power_Supply_Unit`}>Power Supply Unit</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/Storage_Device`}>Storage Device</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/Monitor`}>Monitor</Link></li>
    <li> <Link className='hover:text-green-500' href={`/product/Others`}>Others</Link></li>

  </React.Fragment>
  return (

    < div className="navbar bg-base-100 sticky top-0" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-500 text-white rounded-box w-52">
            <li><Link className='hover:text-green-500' href="/">Home</Link></li>
            <details>
              <summary>Product</summary>
              <ul className="p-2">
                {myProduct}
              </ul>
            </details>
            <li ><a className='hover:text-green-500'>Item 3</a></li>
          </ul>
        </div>
        <Link href="/" className="  normal-case text-xl text-green-500">Aryan Tech</Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu  menu-horizontal px-1">
          <li><Link className='hover:text-green-500' href="/">Home</Link></li>
          <li className='menu menu-dropdown-show' tabIndex={0}>
            <details>
              <summary>Product</summary>
              <ul className="p-2">
                {myProduct}

              </ul>
            </details>
          </li>
          <li><a className='hover:text-green-500'>All Product</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className='text-white btn bg-green-500' href="/pc-builder">Pc Builder</Link>
      </div>
    </div>



  );
};

export default Navber;