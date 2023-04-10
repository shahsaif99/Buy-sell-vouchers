

import React, { useState } from 'react';
import {IoMdArrowDropup,IoMdArrowDropdown} from "react-icons/io"

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-orange-400 w-full">
    <div className="max-w-7xl ml-2 ">
      <div className="grid grid-cols-4 gap-4">
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className=" py-2 w-fit  text-white font-semibold  rounded-lg flex items-center "
      >
        <a>Gift Cards</a>{isOpen === false ? <IoMdArrowDropdown/>:<IoMdArrowDropup/>}
      </div>
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 4
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="bg-orange-500 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-4 gap-4">
//           <DropdownMenu />
//           <DropdownMenu />
//           <DropdownMenu />
//           <DropdownMenu />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
