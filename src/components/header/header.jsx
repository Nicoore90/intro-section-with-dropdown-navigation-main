import "./header.css"
import logo from "./assets/logo.svg"
import menu from "./assets/icon-menu.svg"

export function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="logo"><img src={logo} /></li>
                    <li className="menu">Features</li>
                    <li className="menu">Company</li>
                    <li className="menu">Careers</li>
                    <li className="menu">About</li>
                    <li className="menu-closed"><img src={menu} /></li>
                    <li className="login">Login</li>
                    <li className="button"><button>Register</button></li>
                </ul>
            </nav>
        </header>
    )
}