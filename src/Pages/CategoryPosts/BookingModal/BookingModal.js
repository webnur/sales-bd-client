import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({product}) => {
    const {user} = useContext(AuthContext)
    const {productName, price} = product;
    console.log(product)
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form action="">
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered my-3" />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input type="text" name='price' defaultValue={`price: ${price} BDT`}  disabled placeholder="price" className="input w-full input-bordered mt-3" />

                        <input type="text" name='number' placeholder="phone number" className="input w-full input-bordered mt-3" />

                        <input type="text" name='location' placeholder="Email Address" className="input w-full input-bordered mt-3" />
                        <input type="submit" value="Submit" className="input w-full btn-primary text-white uppercase mt-3 cursor-pointer font-bold" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;