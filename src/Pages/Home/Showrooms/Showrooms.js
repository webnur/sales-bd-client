import React from 'react';

const Showrooms = () => {
    return (
        <section className='my-10'>
            <h2 className="text-3xl text-center">Our Showrooms</h2>
            <p className="font-bold text-center">in dhaka city there are our there showrooms .you can buy secondhand car <br /> face to face in our showrooms</p>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.livemint.com/img/2022/02/19/600x338/Audi_Approved_plus_Audi_Mumbai_South_1_1644828914237_1645277752082.jpg" className='h-[250px]' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gulshan Showroom</h2>
                        <p>12/15 notun Bazar, Gulshan 2, bharidara, dhaka 1212</p>
                    </div>
                </div>

                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ytimg.com/vi/23dSp3VKRMk/maxresdefault.jpg" className='h-[250px]'  alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Uttora Showroom</h2>
                        <p>25/13 Jhoshim Uddin road, behaind the airport, uttora, dhaka 1325</p>
                    </div>
                </div>

                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.indianautosblog.com/2021/12/30/audi-approved-plus-ahmedabad-84cd.jpg" className='h-[250px]'  alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">noya polton showrooms</h2>
                        <p>11/45 baitul mukkrarrom mosque, noya polton, dhaka 1225</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Showrooms;