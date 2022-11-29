import React, { useContext } from 'react';
import date from 'date-and-time';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = data => {
        const now = new Date();
        const postedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        console.log(postedDate)
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const imageHostKey = process.env.REACT_APP_REACT_APP_ImageBB_Api_key
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(imageUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {

                const newProduct = {
                    productName: data.name,
                    price: data.resalePrice,
                    originalPrice: data.price,
                    image: imageData.data.display_url,
                    condition: data.condition,
                    location: data.location,
                    phone: data.number,
                    years_of_use: data.yearsOfUse,
                    category_id: data.categoryId,
                    description: data.description,
                    username: user.displayName,
                    email: user.email,
                    postedDate

                }
                console.log(newProduct)
                // save new product in database
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success(`${data.name} Product successfully added`)
                            navigate('/dashboard/myProducts')
                        }

                    })

            })


    }
    return (
        <div>
            <h2 className="text-3xl mt-5 font-semibold">Add a Product</h2>


            <form onSubmit={handleSubmit(handleAddProduct)} className='mt-5 mr-5'>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("name", { required: 'product name is required' })}
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="resale_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("resalePrice", { required: 'resale Price is required' })}
                    />
                    <label htmlFor="resale_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Resale Price</label>
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="original_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("price", { required: 'price is required' })}
                    />
                    <label htmlFor="original_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Original price</label>
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>

                <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mb-5 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer">
                    <input type="file" name="image" className='bg-white rounded'  {...register("img", { required: 'image is required' })} id="" />


                </label>
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">

                    <input type="text" name='username' defaultValue={user?.displayName} disabled className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    />   
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="Location" defaultValue={user?.email}  disabled className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        />

                    </div>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="condition" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("condition", { required: 'condition is required' })}
                        />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Condition</label>
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="Location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("location", { required: 'Location is required' })}
                        />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="tel" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("number", { required: 'number is required' })}
                        />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
                        {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="usedYear" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            {...register("yearsOfUse", { required: 'years of use is required' })}
                        />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Years Of use</label>
                        {errors.yearsOfUse && <p className='text-red-500'>{errors.yearsOfUse.message}</p>}
                    </div>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="categoryId" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("categoryId", { required: 'category id is required' })}
                    />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category Id, please type 01 or 02 or 03 for select category</label>
                    {errors.categoryId && <p className='text-red-500'>{errors.categoryId.message}</p>}
                </div>


                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write Your Product details"
                    {...register("description", { required: 'description is required' })}
                ></textarea>
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}

                <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a Product</button>
            </form>

        </div>
    );
};

export default AddProduct;