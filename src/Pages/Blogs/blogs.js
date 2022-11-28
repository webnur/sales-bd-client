import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <h2 className="text-2xl my-5">welcome to blogs page</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>The Four Kinds of React State to Manage.
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                            There are four main types of state you need to properly manage in your React apps:
                            Local state
                            Global state
                            Server state
                            URL state</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://www.cronj.com/blog/wp-content/uploads/inheritance.png.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ytimg.com/vi/lj5nnGa_DIw/maxresdefault.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://www.educative.io/v2api/editorpage/5436540852371456/image/4965476405870592" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Blogs;