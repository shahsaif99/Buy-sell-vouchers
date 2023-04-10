import React from 'react';
import {RxPerson} from "react-icons/rx"



export default function Navbar(){
	const [showOptions, setShowOptions] = React.useState(false);
	const [showCurrencies, setShowCurrencies] = React.useState(false);

	return(
		
<div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded my-5">
  <div className="container flex items-center  mx-auto">
  <div  className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Flowbite</span>
  </div>
  {/* Searc bar start */}
  <br/>
  
  <div className="flex md:flex-nowrap md:w-3/6 ">
   
    <div className="relative  md:block ml-2 w-full sticky">
      <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none ">
        <svg className=" w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="rounded-full block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="what are you looking for just type here,,,"/>
    </div>
   
  </div>
  {/* search bar ends */}
  <div className='flex items-center ml-16 space-x-5   '>

  <RxPerson className='text-gray-500  '/>
  <div> Login/Signup</div>
		{/* Drop down language start */}
		<div className="relative inline-block  "  onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)} >
    <button
  className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
>
 

 
  eng
</button>

      {showOptions && (
        <div  className="absolute z-10  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 3
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 4
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 5
          </a>
        </div>
      )}
    </div>

		{/* drop down language ends */}

		{/* drop down currency start */}
		<div className="relative inline-block"  onMouseEnter={() => setShowCurrencies(true)}
        onMouseLeave={() => setShowCurrencies(false)} >
    <button
  className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
>
 

 
  EUR
</button>

      {showCurrencies && (
        <div  className="absolute z-10  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            PKR
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            INR
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            GBP
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            USD
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            USDT
          </a>
        </div>
      )}
    </div>

		{/* drop down currenc ends */}
  </div>

  
  </div>
</div>

	)
}







