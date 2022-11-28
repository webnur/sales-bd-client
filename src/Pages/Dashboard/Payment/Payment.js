import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    console.log(booking)
    return (
        <div>
            <h2 className="text-2xl">Payment page</h2>
            <h2 className="text2xl">payment for {booking.productName}</h2>
            <p className="text-xl">please pay ${booking.price} for your car</p>
        </div>
    );
};

export default Payment;