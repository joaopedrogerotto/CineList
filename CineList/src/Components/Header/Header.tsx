import {NavLink } from "react-router-dom";
import "./Header.css"


function Header(){
    return(
        <header className="header">
            <div className="headerContainer">
                <nav className="nav">
                    <NavLink 
                        to="/filmes" 
                        className={({isActive}) => isActive ? "navLink active" :  "navLink"}>
                            Filmes
                    </NavLink>
                    <NavLink 
                        to="/favoritos" 
                        className={({isActive}) => isActive ? "navLink active" :  "navLink"}>
                            Favoritos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;