import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M95uqD5PGLT6zk7iJ0102GD6eG9uHthBJXh7QysQ3a5pgnkX3T3vFJInRhdr7CtiLUgUuKH9p1cgJYT1MlzT1Ju00v6OoNRey');


const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    const { productName, price } = booking
    return (
        <div>
            <h2 className="text-3xl">payment page</h2>
            <h2 className="text2xl">pay for {productName}</h2>
            <p>please pay {price} for your car</p>

            <div className='w-96 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking = {booking}
                     />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;