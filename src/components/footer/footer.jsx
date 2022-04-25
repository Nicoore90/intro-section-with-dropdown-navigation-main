import "./footer.css"
import databiz from "./assets/client-databiz.svg"
import audiophile from "./assets/client-audiophile.svg"
import meet from "./assets/client-meet.svg"
import maker from "./assets/client-maker.svg"


export function Footer() {
    return(
        <footer className="footer">
            <img src={databiz} alt=""  className="client"/>
            <img src={audiophile} alt="" className="client"/>
            <img src={meet} alt="" className="client"/>
            <img src={maker} alt="" className="client"/>
        </footer>
    )
}