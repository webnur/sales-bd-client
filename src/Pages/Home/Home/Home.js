import React from 'react';

import { useQuery } from '@tanstack/react-query';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    const {data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <Banner></Banner>
            {
                categories.map(category => <p>Hello Bangladesh</p>)
            }
        </div>
    );
};

export default Home;