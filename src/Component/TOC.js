import React, { useEffect, useState } from "react";
import classes from "./TOC.module.css"
import { FcList } from "react-icons/fc";
import { FcPodiumWithSpeaker, FcServices, FcOpenedFolder, FcVoicePresentation, FcCalendar, FcExport, FcDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import Header from './Header'
const TOC = () => {
    
    const menus = [
        { name: "IFRAME HACK"},
        { name: "ENABLE SSH IN APACHE"},
        { name: "RESTRICT DIRECTORY"},
        { name: "SQL INJECTION"},
        
    ];

    const [open, setOpen] = useState(false);

       const HandleClick = () =>{
        setOpen(!open)
    }

    // useEffect(()=>{
    //     setOpen(OpenToc)
    // },[OpenToc]) w-screen	
    
    return (
        // <section className="flex min-h-screen gap-6" >
            <div
                className={`bg-[#F6F6C9] text-gray-800 px-4v`}
            >
                <Header />
                <aside className="flex">
                {/* <hr className="w-full h-1 bg-slate-300"/> */}
            
                        <div className="mt-4 flex flex-col h-screen">
                            {menus?.map((menu, i) => (
                                

                                <div className="container flex flex-col justify-center px-4 py-4 mx-auto md:p-8">

                                    <div className="w-full bg-gray-600 rounded-lg ring-1 ring-blue-600 ">
                                
                                        <button
                                            onClick={HandleClick}
                                            // to={menu?.link}
                                            // key={i}
                                            className={` ${menu?.margin && "mt-5"
                                                }group flex items-center text-md font-medium p-2 hover:bg-blue-800 rounded-md`}
                                        >

                                            {/* <div>{React.createElement(menu?.icon, { size: "28" })}</div> */}
                                            <h2
                                                
                                                className={`whitespace-pre duration-500`}
                                            >
                                                {menu?.name}
                                            </h2>
                                            <h2
                                                className={`absolute left-48 bg-gray-900 font-semibold whitespace-pre text-gray-100 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                            >
                                                {menu?.name}
                                            </h2>
                                        </button>
                                    </div>
                                </div>
                                    
                            ))}
                        </div>
                   
                    {open &&<iframe src="http://172.29.233.128:8080/#/" width="100%" height="800px"/>}
                    </aside>
            </div>
        // </section>
    );
};

export default TOC;






//     <summary className="px-4 text-white py-6">
//         {item.name}
//     </summary>

//     <div>
//         {isSelected ? (
//             <div>
//                 <p>Filename: {selectedFile.name}</p>
//                 <p>Filetype: {selectedFile.type}</p>
//                 <p>Size in bytes: {selectedFile.size}</p>
//                 <p>
//                     lastModifiedDate:{' '}
//                     {selectedFile.lastModifiedDate.toLocaleDateString()}
//                 </p>
//             </div>
//         ) : (
//             <p></p>
//         )}
//     </div>


//     <div className='flex flex-col'>

//         {/* <span className=" max-w-4xl flex mx-auto justify-center w-full h-auto "> */}
//             <DropFileInput />

//         {/* </span> */}




        
//             <div className='flex items-center justify-end p-6'>
//                 <button
//                     className="mx-auto bg-blue-700 text-white active:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
//                     type="button" onClick={() => handleSubmission(item._id)}>
//                     Submit
//                 </button>
//             </div>
        
//     </div>
// </details>
// </div>