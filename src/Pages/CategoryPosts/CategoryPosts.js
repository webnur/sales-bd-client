import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';

const CategoryPosts = () => {
    const {user} = useContext(AuthContext)
    const [product, setProduct] = useState(null)
    const products = useLoaderData();
    const navigate = useNavigate()
    const handleModal = data => {
        if(!user){
            toast.error('please login before booking')
            navigate('/login')
        }
        setProduct(data)

    }
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
                        // setProduct={setProduct}
                        handleModal={handleModal}
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