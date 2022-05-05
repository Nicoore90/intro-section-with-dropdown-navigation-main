import "./company.css"
import open from "./assets/icon-arrow-down.svg"

export function Company() {
    return(
        <div className="sub-menu">
            <li>Company</li>
            <img src={open} alt="" className="open-company" />
        </div>
    )
}