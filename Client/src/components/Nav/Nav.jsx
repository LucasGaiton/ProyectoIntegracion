import SearchBar from '../SearchBar/SearchBar'
import Style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav({ onSearch, logOut }) {
    //Handdlers 
    const handdlerOut = () => {
        logOut()
    }
    return (
        <nav className={Style.nav}>
            <div>
                <button onClick={handdlerOut} className={Style.buttonLogOut}>LogOut</button>
            </div>
            <div className={Style.navegation}>
                <NavLink className={Style.NavLink} to='/Home'>Home</NavLink>
                <NavLink className={Style.NavLink} to='/About'>About</NavLink>
                <NavLink className={Style.NavLink} to='/favorites'>Favorites</NavLink>

            </div>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}