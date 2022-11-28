import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const { productName, price, image } = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;
 

        const booking = {
            productName,
            image,
            name,
            email,
            price,
            number,
            location
        }
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setProduct(null)
                toast.success('booking successfully completed')
                form.reset()
            }
            else{
                toast.error(data.message)
            }
            
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered my-3" />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input type="text" name='price' defaultValue={`price: ${price} BDT`} disabled placeholder="price" className="input w-full input-bordered mt-3" />

                        <input type="text" name='number' placeholder="phone number" className="input w-full input-bordered mt-3" />

                        <input type="text" name='location' placeholder="Your Location" className="input w-full input-bordered mt-3" />
                        <input type="submit" value="Submit" className="input w-full btn-primary text-white uppercase mt-3 cursor-pointer font-bold" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;