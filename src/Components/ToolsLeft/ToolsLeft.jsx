import "./toolsLeft.css";
import LogoImg from '../../assets/images/logo2.png'
import { IoHome, IoCompass, IoHeart, IoChatbubbleEllipses   } from "react-icons/io5";
import { HiStatusOnline, HiFire, HiUserGroup, HiOutlineVideoCamera   } from "react-icons/hi";
import { HiMiniUser } from "react-icons/hi2";
import { MdStadium } from "react-icons/md";


export function ToolsLeft({menu}) {
    const date = new Date().getFullYear();

    return (
        <div className="ToolsLeft">
           
            <div className="logo">
                <img src={LogoImg} alt="" />
            </div>

            <div className="listToolsLeft">
                <a href="/" className={menu === "Feed" ? "select": ""}><IoHome/> Feed</a>
                <a href="/perfil" className={menu === "Perfil" ? "select": ""}><HiMiniUser/> Perfil</a>
                <a href="/explorar" className={menu === "Explorar" ? "select": ""}><IoCompass /> Explorar</a>
                {/* <a href="/notificacoes" className={menu === "Notificações" ? "select": ""}><IoHeart /> Notificações</a> */}
               {/*  <a href="/mensagens" className={menu === "Mensagens" ? "select": ""}><IoChatbubbleEllipses  /> Mensagens</a> */}
                <a href="/trending" className={menu === "Trending" ? "select": ""}><HiFire /> Trending</a>
                <a href="/moments" className={menu === "Moments" ? "select": ""}><MdStadium /> Moments</a>
                <a href="/grupos" className={menu === "Grupos" ? "select": ""}><HiUserGroup /> Grupos</a>
                <a href="/reels" className={menu === "Reels" ? "select": ""}><HiOutlineVideoCamera /> Reels</a>
                <a href="/lives" className={menu === "Lives" ? "select": ""}><HiStatusOnline /> Lives</a>
            </div>

            <div className="links">
                <a href="#" >Privacidade</a>
                <a href="#" >.</a>
                <a href="#"> Termos</a>
                <a href="#" >.</a>
                <a href="#"> Publicidade</a>
                <a href="#">Cookies</a>
                <a href="#" >.</a>
                <a href="#"> Mais</a>
                <a href="#" >.</a>
                <a href="#"> One Player © {date}</a>
            </div>
        
        </div>
    )
}