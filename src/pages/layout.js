import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return (
        <div>
            <header className="flex">
                <h1 className="text-3xl font-bold mb-4 text-blue-900 flex-1">Business Directory</h1>

                {/* Navigation Bar */}
                <nav className="flex justify-end gap-4 mb-4">
                    <Link to="/Directory-system" className="text-blue-900 font-bold text-xl">Companies</Link>
                    <Link to="./posts" className="text-blue-900 font-bold text-xl">Posts</Link>
                    <Link to="./admin" className="text-blue-900 font-bold text-xl">Admin</Link>
                    <Link to="./users" className="text-blue-900 font-bold text-xl">Users</Link>
                </nav>
            </header>

            {/* Main content determined by child routes */}
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
