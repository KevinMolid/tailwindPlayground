import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../AvatarSmall.png'
import NavLink from './NavLink'


const Navigation = () => {
  return (
    <nav>
        <ul className='flex gap-6 font-semibold text-sm sm:text-base items-center'>
          <NavLink to="/favorites">My Classes</NavLink>
          <NavLink to="/discover">Find Flashcards</NavLink>
          <NavLink to="/create">Make Flashcards</NavLink>
          <NavLink to="/profile" img={avatar}>Kevin Molid</NavLink>
        </ul>
    </nav>
  )
}

export default Navigation