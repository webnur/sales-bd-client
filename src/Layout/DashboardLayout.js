import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="drawer drawer-mobile mt-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-slate-100 text-base-content">
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                        <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                        <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                        <li><Link to='/dashboard/myBuyer'>My Buyer</Link></li>
                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;