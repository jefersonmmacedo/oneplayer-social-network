import "./toolsLeft.css";
import LogoImg from '../../assets/images/logo2.png'
import { IoHome, IoCompass, IoHeart, IoChatbubbleEllipses, IoLogoFacebook   } from "react-icons/io5";
import { HiStatusOnline, HiOutlineFire, HiUserGroup, HiOutlineVideoCamera   } from "react-icons/hi";
import { HiMiniUser } from "react-icons/hi2";
import { MdStadium } from "react-icons/md";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BsPlayBtn, BsPlayBtnFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { FaMedal } from "react-icons/fa";
import { BiMedal  } from "react-icons/bi";
import { RiFacebookFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";

export function ToolsLeft({menu}) {
    const date = new Date().getFullYear();

    return (
        <div className="ToolsLeft">
           
            <div className="logo">
                <a href="/">
                    <img src={LogoImg} alt="" />
                </a>
            </div>

            <div className="listToolsLeft">
                <a href="/" className={menu === "Feed" ? "select": ""}><GoHomeFill/> Feed</a>
                <a href="/perfil" className={menu === "Perfil" ? "select": ""}><HiMiniUser/> Perfil</a>
                <a href="/explorar" className={menu === "Explorar" ? "select": ""}><IoCompass /> Explorar</a>
                {/* <a href="/notificacoes" className={menu === "Notificações" ? "select": ""}><IoHeart /> Notificações</a> */}
               {/*  <a href="/mensagens" className={menu === "Mensagens" ? "select": ""}><IoChatbubbleEllipses  /> Mensagens</a> */}
                <a href="/trending" className={menu === "Trending" ? "select": ""}><AiFillFire /> Trending</a>
                <a href="/moments" className={menu === "Moments" ? "select": ""}><MdStadium /> Moments</a>
                <a href="/conquistas" className={menu === "Conquistas" ? "select": ""}><BiMedal /> Conquistas</a>
                <a href="/grupos" className={menu === "Grupos" ? "select": ""}><HiUserGroup /> Grupos</a>
                <a href="/virals" className={menu === "Virals" ? "select": ""}><BsPlayBtnFill /> Virals</a>
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
                <a href="#">Anuncie</a>
                <a href="#" >.</a>
                <a href="#"> Mais</a>
                <p> One Player © {date}</p>
            </div>

            <div className="icons">
                <a href="/"><RiFacebookFill size={18}/></a>
                <a href="/"><RiTwitterXFill size={16}/></a>
                <a href="/"><RiInstagramLine size={18}/></a>
                <a href="/"><RiLinkedinBoxFill size={18}/></a>
                <a href="/"><RiYoutubeFill size={20}/></a>
            </div>
        
        </div>
    )
}