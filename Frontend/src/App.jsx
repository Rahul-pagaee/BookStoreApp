
import './App.css'
import Courses from '../src/Courses/Courses'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import Contact from './component/Contact'
function App() {
  return (
    <div data-theme="light" className=" body- bg-gray-200">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={< Login />} />
        <Route path='/Contact' element={< Contact />} />
      </Routes>
    </div>

  )
}

export default App
