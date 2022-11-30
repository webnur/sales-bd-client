import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const navigation = useNavigation()
    const booking = useLoaderData();
    console.log(booking)
    const { productName, price } = booking;

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
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