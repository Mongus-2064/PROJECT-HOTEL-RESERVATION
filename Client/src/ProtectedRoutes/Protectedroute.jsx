import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protectedroute = ({children}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token)
        {
            navigate("/login")
        }
    })
  return (
    <div>
      {token ? children : null }
    </div>
  )
}

export default Protectedroute
