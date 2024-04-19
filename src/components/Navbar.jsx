import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar_2">
      <h4>
        <NavLink to="/">Home</NavLink>
      </h4>
      <h4>Teachers</h4>
      <h4>
        <NavLink to="students">Students</NavLink>
      </h4>
    </div>
  );
}

export default Navbar