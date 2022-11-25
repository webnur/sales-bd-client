import React, { useContext } from 'react';
import { FaGithub, FaUserAlt, } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css'
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (data) => {
        // console.log(data)
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const imageHostKey = process.env.REACT_APP_REACT_APP_ImageBB_Api_key
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(imageUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData)
                createUser(data.email, data.password)
                    .then(result => {
                        const user = result.user
                        console.log(user)
                        const userInfo = {
                            displayName: data.name,
                            photoURL: imageData.data.display_url
                        }
                        updateUser(userInfo)
                        toast.success('sign up successfully')
                        navigate(from, {replace: true})
                    })
                    .catch(error => console.error(error))
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <section className="signup-bg p-5">
            <div className="sm:w-full max-w-sm p-6 m-auto mx-auto form-bg rounded-md shadow-md dark:bg-gray-800">

                <form onSubmit={handleSubmit(handleSignUp)} className="w-full max-w-md">

                    <h1 className="text-3xl font-semibold text-center text-white dark:text-white">Sign Up</h1>
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <FaUserAlt className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"></FaUserAlt>
                        </span>

                        <input type="text"
                            {...register("name", { required: 'name is required' })}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div>
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <HiMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"></HiMail>
                        </span>
                        <input type="email"
                            {...register("email", { required: 'email is required' })}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />

                    </div>
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer">
                        <input type="file" name="image" className='bg-white rounded-xl'  {...register("img", { required: 'img is required' })} id="" />


                    </label>
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <HiLockClosed className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"></HiLockClosed>
                        </span>

                        <input type="password"
                            {...register("password", { required: 'Password is required' })}
                            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>

                        <div className="mt-6 text-center ">
                            <Link to='/login' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </form>
                <div>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                        <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                            or login with Social Media
                        </p>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>

                    <div className="flex items-center mt-6 -mx-2">
                        <button  onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                </path>
                            </svg>

                            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                        </button>

                        <button className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200">
                            <FaGithub></FaGithub>
                        </button>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default SignUp;