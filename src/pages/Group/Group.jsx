import { IoArrowBack, IoChatbubbleEllipsesOutline, IoShareSocialSharp  } from "react-icons/io5";
import photo from "../../assets/images/default.png";
import photo2 from "../../assets/images/default2.png";
import photo3 from "../../assets/images/default3.png";
import photo4 from "../../assets/images/default4.png";
import profileGroup from "../../assets/images/imageDefault2.png";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import { HiCheckBadge, HiMiniUser } from "react-icons/hi2";
import { RiShieldStarLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";


import "./group.css";
import { HiLink } from "react-icons/hi";
import { useState } from "react";
import { Feed } from "../../Components/Feed/Feed";
import { FeedGroup } from "../../Components/FeedGroup/FeedGroup";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { SlOptionsVertical } from "react-icons/sl";
import { CiSaveDown2 } from "react-icons/ci";
import Navbar from "../../Components/NavBarTop/Navbar";

export function Group() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Group">
            <Navbar />
            <div className="aside">
                <ToolsLeft menu={""}/>
                
                <div className="asideGroup">
                    <div className="links">
                        <a href="/"><IoArrowBack /> Doentes por Futebol</a>
                        <div className="buttonsLinks">
                            <button><IoShareSocialSharp  /></button>
                            <button><SlOptionsVertical /></button>
                        </div>
                    </div>

                    <div className="infosGroup">
                       <div className="topGroup">
                        <div className="user">
                        <img src={profileGroup} alt="Perfil" />
                            <div className="usernames">
                                    <div className="verified">
                                    <h4>Doentes por Futebol</h4>
                                    </div>
                                    <h5>@doentesporfutebol</h5>
                            </div>
                        </div>

                                <button>Entrar</button>

                                {/* <button className="btnGroup"><IoCalendarOutline /></button> */}

                            {/* <div className="buttonsInfosGroup">
                                <button><IoCalendarOutline /></button>
                                <button><CiSaveDown2 size={22} /></button>
                                <button><IoChatbubbleEllipsesOutline /></button>
                           </div> */}
                        </div>

                       <div className="bio">
                            <p>O pedaço padrão de Lorem Ipsum usado desde então é reproduzido. Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica</p>
                       </div>

                       <div className="modeInfos">

                        <h5><HiMiniUser /> Aberto</h5>
                        <h5><RiShieldStarLine />Apenas futebol</h5>
                        <h5><IoCalendarOutline />Criado Dez 2023</h5>
                        <h5><HiLink /> <a href="/perfil">instagram.com/doentesporfutebol</a></h5> 

                       </div>

                       <div className="connection">
                            <div className="follow">
                                <div className="numbers">
                                    <h5>391k <span>membros</span></h5>
                                </div>
                                <div className="images">
                                <img src={photo} alt="Perfil" />
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                <img src={photo} alt="Perfil" />
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                <img src={photo} alt="Perfil" />
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                </div>
                            </div>

                       </div>
                    </div>

                    <hr />


                    <div className="buttonsGroup">
                <button className={section === "Postagens" ? "select" : ""} onClick={() => handleSelectSection("Postagens")}>Postagens</button>
                {/* <button className={section === "Fotos" ? "select" : ""} onClick={() => handleSelectSection("Fotos")}>Fotos</button>
                <button className={section === "Videos" ? "select" : ""} onClick={() => handleSelectSection("Videos")}>Videos</button> */}
                <button className={section === "Enquetes" ? "select" : ""} onClick={() => handleSelectSection("Enquetes")}>Enquetes</button>
                <button className={section === "Eventos" ? "select" : ""} onClick={() => handleSelectSection("Eventos")}>Eventos</button>
            </div>

            <FeedGroup />

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}