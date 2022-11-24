import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <div className='mt-5'>
                <h1 className='text-4xl text-center'>Ops! page is not Found!</h1>

                <div className="swap-off text-center text-8xl">🥶</div>
                
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
