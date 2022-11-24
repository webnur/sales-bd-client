import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h2 className="text-3xl mt-5 font-semibold">Add a Product</h2>

            <form action="">
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product name</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product name</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product name</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                

            </form>
        </div>
    );
};

export default AddProduct;