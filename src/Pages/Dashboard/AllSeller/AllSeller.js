import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${'seller'}`);
            const data = res.json();
            return data;
        }
    })


    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('delete Seller successfully')
                    refetch()
                }

            })
    }

    const verifySeller = email => {
        fetch(`http://localhost:5000/sellerverified?email=${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('successfully');
                }

                refetch()
              
            })
    }

    return (
        <div>
            <h2 className="text-2xl my-5">All seller page</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.status !== 'verified' ?
                                            <button className='btn btn-xs btn-primary' onClick={() => verifySeller(user.email)}>Verify</button>
                                            :
                                            <span className='badge badge-outline'>verified</span>}</td>
                                    <td><button className='btn btn-xs btn-warning text-white' onClick={() => handleDeleteSeller(user?._id)}>delete</button> </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;