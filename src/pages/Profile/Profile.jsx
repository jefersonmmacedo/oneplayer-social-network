import { IoArrowBack, IoChatbubbleEllipsesOutline, IoShareSocialSharp  } from "react-icons/io5";
import photo from "../../assets/images/default.png";
import photo2 from "../../assets/images/default2.png";
import photo3 from "../../assets/images/default3.png";
import photo4 from "../../assets/images/default4.png";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import { HiCheckBadge, HiMiniUser } from "react-icons/hi2";
import { RiShieldStarLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";


import "./profile.css";
import { HiLink } from "react-icons/hi";
import { useState } from "react";
import { Feed } from "../../Components/Feed/Feed";
import { FeedProfile } from "../../Components/FeedProfile/FeedProfile";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { SlOptionsVertical } from "react-icons/sl";
import { CiSaveDown2 } from "react-icons/ci";

export function Profile() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Profile">
            <div className="aside">
                <ToolsLeft menu={"Perfil"}/>
                
                <div className="asideProfile">
                    <div className="links">
                        <a href="/"><IoArrowBack /> Jeferson Macedo</a>
                        <div className="buttonsLinks">
                            <button><IoShareSocialSharp  /></button>
                            <button><SlOptionsVertical /></button>
                        </div>
                    </div>

                    <div className="infosProfile">
                       <div className="topProfile">
                        <div className="user">
                        <img src={photo} alt="Perfil" />
                            <div className="usernames">
                                    <div className="verified">
                                    <h4>Jeferson Macedo</h4>
                                    <HiCheckBadge />
                                    </div>
                                    <h5>@jefersonmmacedo</h5>
                            </div>
                        </div>

                                {/* <button>+ Seguir</button> */}

                                <button><IoCalendarOutline /></button>
                                <button><CiSaveDown2 size={22} /></button>
                                <button><IoChatbubbleEllipsesOutline /></button>

                            {/* <div className="buttonsInfosProfile">
                                <button><IoCalendarOutline /></button>
                                <button><CiSaveDown2 size={22} /></button>
                                <button><IoChatbubbleEllipsesOutline /></button>
                           </div> */}
                        </div>

                       <div className="bio">
                            <p>O pedaço padrão de Lorem Ipsum usado desde então é reproduzido. Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica</p>
                       </div>

                       <div className="modeInfos">

                        <h5><HiMiniUser /> Comunicador/Jornalista</h5>
                        <h5><RiShieldStarLine />Fluminense Footbal Club</h5>
                        <h5><HiLink /> <a href="/perfil">perfil/jefersonmmacedo</a></h5>
                        <h5><IoCalendarOutline />Entrou Dez 2023</h5>

                       </div>

                       <div className="connection">
                            <div className="follow">
                                <div className="numbers">
                                    <h5>391k <span>Seguidores</span></h5>
                                </div>
                                <div className="images">
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                </div>
                            </div>
                            <div className="follow">
                                <div className="numbers">
                                    <h5>391k <span>Seguindo</span></h5>
                                </div>
                                <div className="images">
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                <img src={photo2} alt="Perfil" />
                                <img src={photo3} alt="Perfil" />
                                <img src={photo4} alt="Perfil" />
                                </div>
                            </div>

                       </div>
                    </div>

                    <hr />


                    <div className="buttonsProfile">
                <button className={section === "Postagens" ? "select" : ""} onClick={() => handleSelectSection("Postagens")}>Postagens</button>
                <button className={section === "Pessoas" ? "select" : ""} onClick={() => handleSelectSection("Pessoas")}>Reels</button>
                <button className={section === "Trending" ? "select" : ""} onClick={() => handleSelectSection("Trending")}>Moments</button>
                <button className={section === "Marcados" ? "select" : ""} onClick={() => handleSelectSection("Marcados")}>Marcados</button>
            </div>

            <FeedProfile />

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}