import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
function Freebook() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [freebook, setfreebook] = useState([])
    useEffect(() => {
        const getFree = async () => {
            try {
                const free = await axios.get("http://localhost:3000/book")
                setfreebook(free.data)
            } catch (error) {
                console.log("error", error)
            }
        }
        getFree()

    }, [])

    const FilterData = freebook.filter((data) => data.category === "Free")
    // console.log(FilterData)

    return (<>
        <div className=' max-w-screen-2xl container mx-auto px-4 '>
            <div>
                <h1 className='font-semibold pb-4 text-xl '>Free offered Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ut quo quas, id deserunt facere, quae nobis error non, dolorem praesentium autem velit cupiditate earum doloremque suscipit neque architecto a?</p>

            </div>
            <div>
                {FilterData.length > 0 && (
                    <Slider {...settings}>
                        {FilterData.map((item) => (
                            <div key={item._id || item.id} className="px-2">
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                )}

            </div>

        </div>
    </>
    )
}

export default Freebook