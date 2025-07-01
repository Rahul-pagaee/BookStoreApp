import Footer from '../component/footer'
import Navbar from "../component/Navbar.jsx"
import Coures from "../component/Coures"

function Courses() {

    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Coures />
            </div>
            <Footer />

        </>
    )
}

export default Courses
