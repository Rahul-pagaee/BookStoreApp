
import Cards from "./Cards.jsx"
import list from "../../public/list.js"
import { Link } from "react-router-dom"
function Coures() {
    // const filter = list.filter((data) => data.category === "paid");
    // console.log(filter)
    return (

        <>

            <div className="max-w-screen-3xl container  mx-auto flex text-center ">


                <div className='md:mt-35 mt-50'>
                    <h1 className='text-3xl font-semibold'>"Every Book is a Journey, Every Page an  <span className='text-red-500 font-medium'>Escape"</span>
                    </h1>
                    <p className='mt-12'>Books are more than just ink on paper—they are gateways
                        to worlds unknown. With every turn of a page, we step into
                        the shoes of characters, explore distant lands, and live stories
                        far beyond our own. Whether it's a gripping adventure, a quiet
                        romance, or a deep philosophical reflection, books transport us away
                        from the noise of the real world. In times of stress or solitude,
                        reading offers comfort, escape, and discovery. Every book becomes a
                        journey we embark on, and every page we turn lets us escape
                        into imagination, learning, and wonder. It's not just reading—it's
                        traveling without moving.
                    </p>
                    <Link to={"/"}><button className='bg-red-500 hover:bg-red-700 text-white duration-200 px-6 py-2 rounded-xl mt-8 '>Back
                    </button></Link>

                </div>

            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 items-center justify-evenly w-auto px-30">
                {
                    list.map((item) => (<Cards key={item.id} item={item} />

                    )
                    )

                }
            </div>
        </>

    )
}


export default Coures