import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const Navbar = () => {
    const {user} = useContext(UserContext)

    const logout = () => {
        axios.get('http://localhost:5000/application/logout')
        window.location.href = '/logout'
    }

   
  return (
    <div className='flex justify-between px-10 bg-slate-500 text-white py-4'>
        {
            user? 
            <div className='flex justify-between w-full'>

            <div>Hi {user.rest.username}</div> 
            <button onClick={logout}>Logout</button>
            </div>
            
            : (<button onClick={()=>window.location.href="/login"}>Login</button>
        )}
        

    </div>
  )
}

export default Navbar