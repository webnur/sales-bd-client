import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyWishlist = () => {
    const { user } = useContext(AuthContext)
    const { data: wishlists = [], refetch } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-chi-coral.vercel.app/wishlist/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    const deleteWishlist = id => {
        fetch(`https://assignment-12-server-chi-coral.vercel.app/wishlist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('wishlist successfully delete')
                    refetch()
                }

            })

    }

    return (
        <div>
            <h2 className="text-2xl">My Wishlist</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>quantity</th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlists.map((wishlist, i) =>
                                <tr key={wishlist._id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={wishlist.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{wishlist.productName}</div>

                                    </td>
                                    <td>{wishlist.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs" onClick={() => deleteWishlist(wishlist._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyWishlist;