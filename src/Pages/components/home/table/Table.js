
export default function Table(){
    return (
        <div>
                 <div className="text-center my-9 text-2xl text-gray-400">
       PROMOTED PRODUCTS
      </div>
        
        <table className="w-5/6 table-auto mx-auto ">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Sold</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Seller Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white align-middle ">
            <td className="px-4 py-2 flex items-center">
              <img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Product Image" className="w-8 h-8 mr-2 rounded-full" />
              <span>Product Name</span>
            </td>
            <td className="px-4 py-2">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-lg font-medium">$99.99</span>
                  <span className="text-gray-500 line-through ml-2">$129.99</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 font-medium">25% off</span>
                </div>
              </div>
            </td>
            <td className="px-4 py-2 hidden md:table-cell">{/* Replace with actual sold number */}1000</td>
            <td className="px-4 py-2 hidden md:flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>{/* Replace with actual rating */}4.5</span>
            </td>
          </tr>
          {/* Repeat the above row for additional products */}
        </tbody>
      </table>
      
      </div>

    //     <table className="w-full table-auto">
    //     <thead>
    //       <tr className="bg-gray-200">
    //         <th className="px-4 py-2 text-left">Product Name</th>
    //         <th className="px-4 py-2 text-left">Price</th>
    //         <th className="px-4 py-2 text-left">Sold</th>
    //         <th className="px-4 py-2 text-left">Seller Rating</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="bg-white align-middle">
    //         <td className="px-4 py-2 flex items-center">
    //           <img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Product Image" className="w-8 h-8 mr-2 rounded-full" />
    //           <span>Product Name</span>
    //         </td>
    //         <td className="px-4 py-2">
    //           <div className="flex flex-col">
    //             <div className="flex items-center">
    //               <span className="text-lg font-medium">$99.99</span>
    //               <span className="text-gray-500 line-through ml-2">$129.99</span>
    //             </div>
    //             <div className="flex items-center">
    //               <span className="text-green-500 font-medium">25% off</span>
    //             </div>
    //           </div>
    //         </td>
    //         <td className="px-4 py-2">{/* Replace with actual sold number */}1000</td>
    //         <td className="px-4 py-2 flex items-center">
    //           <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
    //           <span>{/* Replace with actual rating */}4.5</span>
    //         </td>
    //       </tr>
    //       {/* Repeat the above row for additional products */}
    //     </tbody>
    //   </table>
    
      
      


    )
}