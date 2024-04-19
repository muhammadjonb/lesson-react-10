import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <h4>
            <NavLink to="/">Home</NavLink>
        </h4>
        <h4>Teachers</h4>
        <h4>
            <NavLink to="/students">Students</NavLink>
        </h4>
        
    </div>
  )
}

export default Menu