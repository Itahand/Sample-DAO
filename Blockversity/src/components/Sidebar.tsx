import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.png';



const Sidebar: React.FC = () => {
    return (

        <div className="flex min-h-screen">
            <div className=" flex flex-col bg-[#2F4F29]">
                <div className='flex-initial justify-center items-center'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-12 cursor-pointer'
                    />
                </div>
                <div className="mt-10">
                    <Link
                        to="/"
                        className="block py-2 px-4 mt-10 text-white hover:text-green-500"
                    >
                        Home
                    </Link>

                    <Link
                        to="/proposal"
                        className="block py-2 px-4 text-white hover:text-green-500"
                    >
                        Proposal List
                    </Link>
                    <Link
                        to="/create_proposal"
                        className="block py-2 px-4 text-white hover:text-green-500"
                    >
                        Create Proposal
                    </Link>
                    <Link
                        to="/admin"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Admin
                    </Link>

                    <Link
                        to="/vote"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Vote
                    </Link>
                    <Link
                        to="/createToken"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Create Token
                    </Link>
                    <Link
                        to="/sellToken"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Sell Token
                    </Link>
                    <Link
                        to="/tokenomics"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Tokenomics
                    </Link>
                    <Link
                        to="/manageToken"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Manage Token
                    </Link>
                    <Link
                        to="/admine"
                        className="block py-2 px-4 text-gray-400  hover:text-green-500"
                    >
                        Admine
                    </Link>

                </div>

            </div>
            <div className="w-5/6">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
