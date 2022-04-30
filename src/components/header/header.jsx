import "./header.css"
import logo from "./assets/logo.svg"
import menu from "./assets/icon-menu.svg"
import React, { useState } from 'react'
import { Fragment } from "react"

export function Header(props) {

    const [open, setOpen] = useState(false)


    return(
        <header>
            <nav>
                <ul> 
                    <div className="menu__main">
                        <li className="logo"><img src={logo} /></li>
                        <li className="menu">Features</li>
                        <li className="menu">Company</li>
                        <li className="menu">Careers</li>
                        <li className="menu">About</li>
                    </div>
                    <li className="menu-closed"><img src={menu} onClick={() => setOpen(!open)}/>
                        { open && props.children }</li>
                    <div className="menu__enter">
                        <li className="login">Login</li>
                        <li className="button"><button>Register</button></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export function Dropdown() {


    return (
        <div className="dropdown__container">
            <li className="dropdown">Features</li>
            <li className="dropdown">Company</li>
            <li className="dropdown">Careers</li>
            <li className="dropdown">About</li>
            <li className="dropdown__login">Login</li>
            <li className="dropdown__register"><button>Register</button></li>
        </div>
    )
}