import React from 'react'
import list from "../../public/list.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    const Filterdata = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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

    return (<>
        <div className=' max-w-screen-2xl container mx-auto px-4 '>
            <div>
                <h1 className='font-semibold pb-4 text-xl '>Free offered Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ut quo quas, id deserunt facere, quae nobis error non, dolorem praesentium autem velit cupiditate earum doloremque suscipit neque architecto a?</p>

            </div>
            <div>
                <Slider {...settings}>
                    {Filterdata.map((item) => (
                        <div key={item.id} className="px-2"> {/* Each card is now a separate slide */}
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>

            </div>

        </div>
    </>
    )
}

export default Freebook