import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';



const AllBuyer = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-chi-coral.vercel.app/users/${'buyer'}`)
            const data = await res.json();
            return data;
        }
    })

const handleDeleteBuyer = id => {
    fetch(`https://assignment-12-server-chi-coral.vercel.app/users/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount> 0){
            toast.success('delete buyer successfully')
            refetch()
        }
   
    })
}



    return (
        <div>
            <h2 className="text-2xl my-5">All Buyer</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
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
                                    <td><button  className='btn btn-xs btn-warning text-white' onClick={() => handleDeleteBuyer(user?._id)}>delete</button> </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;