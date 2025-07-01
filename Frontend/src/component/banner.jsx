import React from 'react';
import banner from "../../public/banner2.jpg";

function Banner() {
    return (
        <>
            <hr />
            <div className="max-w-screen-3xl container  mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 pt-24 ">

                {/* Text Section */}

                <div className="w-full md:w-1/2 mb-10 md:mb-0 ">
                    <h1 className="text-4xl font-bold text-center  leading-snug">
                        Welcome to the World of <br />
                        <span className="text-red-600">Action-Packed Stories</span>
                    </h1>
                    <p className="text-center text-gray-600 font-semibold py-5 mt-4 text-lg max-w-2xl mx-auto">
                        Dive into thrilling adventures, heart-pounding moments, and unforgettable heroes. Every story brings action to life!
                    </p>

                    <div className="mt-6 flex flex-col  sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="✉ Email"
                            className="input input-bordered w-full sm:max-w-xt text-bas rounded-md "
                        />

                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-xl text-white px-9 py-1 rounded-lg font-semibold shadow-md transition-all duration-300 mt-3">
                        Send
                    </button>

                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center ">
                    <img src={banner} alt="Books" className="md:max-w-md mb:w-full py-3.5 " />
                </div>
            </div>
        </>
    );
}

export default Banner;
