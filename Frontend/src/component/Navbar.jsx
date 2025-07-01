import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Login from "./Login"
function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky ? "shadow-md bg-base-200" : "shadow-none bg-base-100"}`}>
            <div className="w-full max-w-7xl mx-auto  md:px-4 py-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Left: Logo */}
                <div className="flex-1">
                    <h1 className="font-bold text-3xl">BookStore</h1>
                </div>

                {/* Center: Nav Menu */}
                <div className="flex-1 flex justify-center px-50">
                    <ul className="flex font-medium text-xl space-x-8">
                        <li className="cursor-pointer hover:text-blue-600"><Link to="/">Home</Link></li>
                        <li className="cursor-pointer hover:text-blue-600"><Link to="/Courses">Courses</Link></li>
                        <li className="cursor-pointer hover:text-blue-600"><Link to={"/Contact"}>Contact</Link></li>
                        <li className="cursor-pointer hover:text-blue-600">About</li>
                    </ul>
                </div>

                {/* Right: Search + Theme + Login */}
                <div className="flex-1 flex justify-end items-center gap-3 md:space-x-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-8 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button className="bg-blue-600 text-white md:px-5 px-2.5 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition "
                        onClick={() => document.getElementById("my_modal_1").showModal()}
                    >
                        Login
                    </button>
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
