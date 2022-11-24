import React from 'react';

const Categories = () => {
    return (
        <div className={"card px-6 py-5 md:card-side shadow-xl"}>
        <figure><img src={"https://static.vecteezy.com/system/resources/previews/002/079/984/original/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg"} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className={"card-title"}>category name</h2>
            <p className="text-gray-800">Hello Bangladesh</p>
        </div>
    </div>
    );
};

export default Categories;