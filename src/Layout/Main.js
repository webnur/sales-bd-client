import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>this main page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;