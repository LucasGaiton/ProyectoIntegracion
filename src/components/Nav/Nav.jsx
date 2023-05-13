import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav({onSearch}){
    return(
        <nav className={style.nav}>
            <div className={style.navegation}>
                <NavLink className={style.NavLink} to='/Home'>Home</NavLink>
                <NavLink className={style.NavLink} to = '/About'>About</NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}