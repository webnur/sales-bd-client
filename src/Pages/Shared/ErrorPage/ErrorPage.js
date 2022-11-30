import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <div className='mt-5'>
                <h1 className='text-4xl text-center text-red-600'>Ops! page is not Found!</h1>

                <div className="swap-off text-center text-8xl flex justify-center items-center">
                    <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1669795885~exp=1669796485~hmac=91f71108a5e48d2255d0cda81c40a87ed3b59041b08c5ac6d2f9d35d69dc9854" alt="" />
                </div>

                <br />
                {error && (
                    <div className='text-center text-danger'>
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                        <p>Please Go to <Link to='/login'>Login</Link></p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ErrorPage
