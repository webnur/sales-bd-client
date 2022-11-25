import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryPosts = () => {
    const products = useLoaderData();
    console.log(products)
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
                >
                </ProductCard>)
               }
            </div>
        </div>
    );
};

export default CategoryPosts;