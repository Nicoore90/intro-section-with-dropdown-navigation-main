import "./features.css"
import arrowDown from "./assets/icon-arrow-down.svg"
import { useState } from "react"

export function Features(props) {
    const [open, setOpen] = useState(false)
    return(
        <div className="sub-menu">
            <li>Features</li>
            <img src={arrowDown} alt="" className="open-features" onClick={() => setOpen(!open)}>
                { open && props.children }
            </img>
        </div>
    )
}

export function FeaturesDropdown() {
    return(
        <p>Hola hola hola</p>
    )
}
