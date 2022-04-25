import "./header.css"
import logo from "./assets/logo.svg"
import menu from "./assets/icon-menu.svg"

export function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="logo"><img src={logo} /></li>
                    <li><img src={menu} /></li>
                </ul>
            </nav>
        </header>
    )
}