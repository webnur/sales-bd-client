import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Banner from '../Banner/Banner';
import Category from "../Category/Category"
import Showrooms from '../Showrooms/Showrooms';
import Newsletter from '../NewsLetter/NewsLetter';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';

const Home = () => {
    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-chi-coral.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <Banner></Banner>
            <section className='mt-5'>
                <h2 className="text-3xl text-center my-5 font-bold">Categories</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 container mx-auto'>
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </section>

            <AdvertiseProduct></AdvertiseProduct>
            <Showrooms></Showrooms>
            <Newsletter></Newsletter>


        </div>
    );
};

export default Home;