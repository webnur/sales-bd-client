import React, { useContext, useState } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUser } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const [open, setOpen] = useState(false)
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-slate-50 shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <Link to='/' className="text-2xl font-bold transition-colors duration-300 transform lg:text-3xl hover:text-gray-700" href="/">Sales BD</Link>
                        </div>

                        <div onClick={() => setOpen(!open)} className="flex lg:hidden">

                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">

                                {
                                    open ?
                                        <FaTimesCircle className="w-6 h-6"></FaTimesCircle>
                                        :
                                        <FaBars className="w-6 h-6"></FaBars>
                                }

                            </button>

                        </div>
                    </div>


                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base-200  dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} `}>

                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>

                            <Link to='/blogs' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Blogs</Link>





                            {
                                user?.uid ?
                                    <>
                                        <Link to='/dashboard' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>

                                        <button onClick={handleSignOut} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login
                                        </Link>
                                        <Link to='/signup' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SignUp</Link>
                                    </>
                            }


                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">

                            </button>

                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">

                                <div title={user?.displayName} className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                    {
                                        user?.photoURL ? <img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                                            :
                                            <FaUser className='text-2xl text-center mx-auto pt-2' />
                                            // <img src={"https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"} className="object-cover w-full h-full" alt="avatar" />
                                    }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;