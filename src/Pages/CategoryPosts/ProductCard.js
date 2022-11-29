import React from 'react';

const ProductCard = ({ product, handleModal }) => {
    const { productName, price, originalPrice, image, condition, location, phone, years_of_use, username, status } = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
            <div className='w-96'>
                <figure><img src={image} className='h-[300px]' alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold">{productName}</h2>
                <p className='font-bold'>Resale price: {price} BDT</p>
                <p className='font-bold'>Original Price: <span className='line-through text-red-400'>{originalPrice}BDT</span></p>
                <p className='font-bold'>Location: {location}</p>
                <p className='font-bold'>Condition: {condition}</p>
                <p className='font-bold'>Years of use: {years_of_use}</p>
                <p className='font-bold'>phone: {phone}</p>
                <p className='font-bold'>Seller name: {username}</p>

                {
                    status ? <div className='flex items-center'>
                                <div className='w-5 h-5 bg-green-500 rounded-full'></div>
                                <p className='ml-3 text-green-500 font-bold'>:Verified</p>
                            </div>
                        :
                        <span className='text-rose-500 font-bold'>seller unverified</span>
                }


                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal" onClick={() => handleModal(product)} className="btn btn-primary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;