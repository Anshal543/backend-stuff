import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const UpdatePage = () => {
    const {user,isLoading} = useContext(UserContext)
    const [newName, setNewName] = useState('')

    
   
        if(isLoading){
            return <div>Loading...</div>
        }

        if(!user){
            window.location.href = '/login'
            return
        }

        console.log(user);
   
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/application/${user.rest._id}`, {
                name: newName
            })
            if(res.status == 200){
                console.log(res);
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h1>Update Page</h1>
        <input className='border-2 border-black' type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} name="" id="" />
        <button onClick={handleUpdate}>update</button>
    </div>
  )
}

export default UpdatePage