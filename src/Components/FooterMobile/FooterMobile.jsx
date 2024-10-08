import "./footerMobile.css"
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline, IoCompass, IoCompassOutline, IoHome, IoHomeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiMoviePlay } from "react-icons/bi";
import { BsPlayBtn } from "react-icons/bs";
import photo from "../../assets/images/default.png";

export function FooterMobile() {
    return (
        <div className="FooterMobile">
                <a href="/" ><GoHome /></a>
                <a href="/explorar" ><IoCompassOutline /> </a>
             <button ><GoPlusCircle  /></button>
             <a href="/reels" ><BsPlayBtn /> </a>
             {/* <a href="#" ><IoChatbubbleEllipsesOutline /> </a> */}
                <a href="/perfil" >
                    <img src={photo} alt="" />
                </a>

        </div>
    )
}