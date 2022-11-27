import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const {data: products} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })

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
                    <th>
                        <button className="btn btn-warning btn-xs text-white">Delete</button>
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