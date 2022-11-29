import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertiseProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise/${'advertise'}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-16 mb-8'>
            <h2 className="text-2xl text-center">Advertise Products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 container mx-auto mt-16'>
                {
                    products.map(product =>
                        <div key={product._id} className="card card-compact shadow-xl">
                            <figure><img src={product.image} className='w-full h-[250px]' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.productName}</h2>
                                <p>price: {product.price} BDT</p>
                                <div className="card-actions justify-end">
                                   <p className="text-xl text-rose-400 ">Advertised</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default AdvertiseProduct;