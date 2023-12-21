import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/logo-color.png'
import "./footer.css"

export function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="Footer">

            <div className="copy">
            <h5>One Player. A rede social dos esportes © {date}</h5>
            </div>

        </div>
    )
}