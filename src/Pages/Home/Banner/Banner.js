import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section>

            <div className="hero" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=900")`, backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold mt-5">Welcome to Sales BD</h1>
                        <p className="mb-5 mt-8 font-medium text-lg">there are most popular web development courses. you can build your career here. and we have expert course instractors. 24 hours support system. student care and many others supports</p>
                        <button className="btn btn-primary my-10"><Link to='/courses'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;