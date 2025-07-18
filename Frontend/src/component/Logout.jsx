import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const { authUser, setAuthUser } = useAuth()
    const Navigate = useNavigate()
    const handleLogout = () => {
        try {
            setAuthUser(null)
            localStorage.removeItem("Users")
            toast.success("Logout successfull")
            Navigate("/")

        } catch (error) {
            toast.error("error", error)
        }
    }
    return (
        <>
            <button className='px-2 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
        </>
    )
}
