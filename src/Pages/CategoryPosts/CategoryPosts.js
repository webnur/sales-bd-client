import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';

const CategoryPosts = () => {
    const [product, setProduct] = useState(null)
    const products = useLoaderData();
    return (
        <div>
            <div className='container mx-auto my-5'>
                <h2 className="text-3xl text-center font-bold">Welcome to Product page by Category</h2>
            </div>
            <div className='container mx-auto mt-10'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    >
                    </ProductCard>)
                }
            </div>


           
            {
                product &&  <BookingModal
                 product={product}
                 setProduct= {setProduct}
                 >
                
                </BookingModal>
            }


        </div>
    );
};

export default CategoryPosts;