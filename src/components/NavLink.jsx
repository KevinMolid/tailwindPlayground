import { Link } from 'react-router-dom'

const NavLink = ({ children, to, img }) => {
  return (
    <li className='hover:border-b-4 border-cyan-400 h-10 flex items-center'>
        <Link to={to} className='flex gap-2 items-center'>
        {img && <img src={img} alt="Profile Image" className='size-10 rounded-full'/>}
        {children}
        </Link>
    </li>
  )
}

export default NavLink