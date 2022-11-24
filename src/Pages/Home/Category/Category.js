import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
    const {categoryImage, id, name} = category
    return (
        <div className="card shadow-lg">
            <figure className="px-5 pt-5">
                <img src={categoryImage} alt="Shoes" className="rounded-xl h-[200px] w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <Link to={`category/${id}`} className="btn btn-primary">View All Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;