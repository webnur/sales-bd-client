import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">my order page</h2>
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
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-lg w-20 h-20">
                                                    <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.productName}
                                    </td>
                                    <td>{booking.price}</td>
                                    <th>
                                        {booking?.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-ghost btn-xs bg-primary text-white">pay</button>
                                        </Link>}
                                        {
                                            booking?.price && booking.paid && <span className='text-primary'>paid</span>
                                        }
                                    </th>
                                </tr>)
                        }

                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyOrders;