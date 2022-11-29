import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })


    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('delete product successfully');
                    console.log(data)
                    refetch()
                }

            })
    }

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })

    }



    return (
        <div>
            <h2 className="text-2xl my-5">My products</h2>

            <div className="overflow-x-auto w-full">

                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>total</th>
                            <th>product image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>advertise</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-lg w-20 h-20">
                                                    <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>{product.price}</td>
                                    <td>
                                        {product.advertise !== true ?
                                            <button className="btn btn-warning btn-xs text-white" onClick={() => handleAdvertise(product._id)}>advertise</button>
                                            :
                                            <span>Already Advertised</span>
                                        }

                                    </td>
                                    <th>
                                        <button className="btn btn-warning btn-xs text-white" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyProducts;