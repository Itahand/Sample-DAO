import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="flex">
            <div className=" flex flex-col blue-glassmorphism">
                <div className="mt-10">
                    <Link
                        to="/"
                        className="block py-2 px-4 mt-10 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        to="/admin"
                        className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Admin
                    </Link>
                    <Link
                        to="/proposal"
                        className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Proposal List
                    </Link>
                    <Link
                        to="/create_proposal"
                        className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Create Proposal
                    </Link>
                    <Link
                        to="/vote"

                        className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Vote
                    </Link>
                </div>

            </div>
            <div className="w-5/6">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
