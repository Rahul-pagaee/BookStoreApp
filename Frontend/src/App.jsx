
import './App.css'
import Courses from '../src/Courses/Courses'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import Contact from './component/Contact'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import {
  Navigate
} from 'react-router-dom'

function App() {
  const { authUser, setAuthUser } = useAuth()
  console.log(authUser)
  return (
    <div data-theme="light" className=" body- bg-gray-200">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={authUser ? <Courses /> : <Navigate to={"/signup"} />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={< Login />} />
        <Route path='/Contact' element={< Contact />} />
      </Routes>
      <Toaster />
    </div>

  )
}

export default App
