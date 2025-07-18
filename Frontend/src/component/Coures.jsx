import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                setBook(res.data);
            } catch (error) {
                console.log("error", error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4  sm:px-6 lg:px-8 text-center">
                <div className="mt-12 sm:mt-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-10 font-semibold leading-snug">
                        "Every Book is a Journey, Every Page an{" "}
                        <span className="text-red-500 font-medium">Escape"</span>
                    </h1>
                    <p className="mt-6 text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
                        Books are more than just ink on paper—they are gateways to worlds unknown. With every turn of a page, we step into the shoes of characters, explore distant lands, and live stories far beyond our own. Whether it's a gripping adventure, a quiet romance, or a deep philosophical reflection, books transport us away from the noise of the real world. In times of stress or solitude, reading offers comfort, escape, and discovery.
                    </p>
                    <Link to="/">
                        <button className="bg-red-500 hover:bg-red-700 text-white duration-200 px-6 py-2 rounded-xl mt-8">
                            Back
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-12 px-4 sm:px-6 lg:px-8">
                {book.length === 0 ? (
                    <p className="text-center text-gray-500">No courses available right now.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {book.map((item) => (
                            <Cards key={item._id || item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Courses;
