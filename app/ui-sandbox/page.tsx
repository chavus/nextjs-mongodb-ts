
'use client';
import 'flowbite';
// import { initFlowbite } from "flowbite"
// import { useEffect } from "react"

// import { useState } from "react"

export default function Sandbox(){

  // const [hideMenu, setHideMenu] = useState(true);
  
  // initFlowbite()
// useEffect(()=>{
//   initFlowbite()
// },[])

// const evt = new Event("DOMContentLoaded", { bubbles: true, cancelable: false });
// document.dispatchEvent(evt);

// onClick={()=>setHideMenu(!hideMenu)}

return (
    <>

    <button id="dropdownDefaultButton"  data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button 
    </button>


    <div id="dropdown" className={"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 "}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
    </div>

    {/* <script>
      const evt = new Event("DOMContentLoaded", { bubbles: true, cancelable: false });
      document.dispatchEvent(evt);
    </script> */}

    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script> */}

    </>

)

}