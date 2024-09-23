import Navigation from "./Navigation"
import { Link } from 'react-router-dom'
import logo from '../Flashcard4.png'

const Header = () => {
  return (
    <header className="bg-white flex p-4 sm:px-10 justify-between items-center">
        <Link to='/' className="sm:text-2xl font-bold flex gap-2 items-center">
        <img src={logo} className="size-10 inline"/> Flashcards
         </Link>
        <Navigation />
    </header>
  )
}

export default Header