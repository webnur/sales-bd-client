import React from 'react';

const ProductCard = ({ product, handleModal }) => {
    const { productName, price, originalPrice, image, condition, location, phone, years_of_use, username } = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
            <div className='w-96'>
                <figure><img src={image} className='h-[300px]' alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Resale price: {price} BDT</p>
                <p className=''>Original Price: <span className='line-through text-red-400'>{originalPrice}BDT</span></p>
                <p>Location: {location}</p>
                <p>Condition: {condition}</p>
                <p>Years of use: {years_of_use}</p>
                <p>phone: {phone}</p>
                <p>Seller: {username}</p>

                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal" onClick={() => handleModal(product)} className="btn btn-primary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;