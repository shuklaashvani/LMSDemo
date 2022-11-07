import {React,useState,useEffect} from 'react'
// import axios from 'axios'
import Card from './Card'
// import Sidenav from '../Layout/Sidenav'
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Auth/auth';
import Page from './Page'
import { Navigate } from 'react-router-dom';
import TOC from './TOC';
import Header from './Header';
import Backdrop from './Backdrop';

function Dashboard() {
    const Navigate = useNavigate()
    const [open,setopen] = useState(false)
    // const [OpenToc,setTOC] = useState(false)

    const course = [
        {
            name:"Web Security",
            price:240,
            Rate:0,
            _ID:234
        }
        // {
        //     name:"Web Security",
        //     price:240,
        //     Rate:3
        // }
    ]
    // let attachedClasses =[classes.SideDrawer,classes.Close];
    // if(open){
    //    attachedClasses=[classes.SideDrawer,classes.Open];
    // }


    // const HandleClick = () =>{
    //     setopen(!open)
    // }
 
    const HandleTocClick = () => {
        // setTOC(!OpenToc)
        Navigate('/TOC')
    }

    return (
        <div className='relative bg-gray-100 h-screen'>
            
            <Header />

        <aside className="flex">
            
                {/* {OpenToc && <TOC HandleClick={HandleClick} OpenToc/>} */}
            

                {!open && <div className='flex flex-col w-full'>
                    <h1 className='mt-6 mb-3 capitalize text-4xl mx-auto font-bold'>
                        Popular courses
                    </h1>
                    <hr className="w-1/3 mx-auto h-2 rounded-full bg-gradient-to-r from-gray-700 "/>
                    <div className="flex grid-flow-col justify-items-center ml-6 mr-5">
                        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-full py-6">
                            {course.map(item =>{
                                
                                return(
                                    <Card item={item} Button="Open" onPublish={HandleTocClick}/>
                                )
                            })}
                        </div>
                    </div> 

            </div>}
                {/* {open &&<iframe src="http://172.29.233.128:8080/#/" width="100%" />} */}
            </aside>
        </div>
    )
}

export default Dashboard;