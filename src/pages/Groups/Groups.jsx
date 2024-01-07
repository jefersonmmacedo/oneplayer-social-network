import "./groups.css";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import photo from "../../assets/images/imageDefault.png";
import photo2 from "../../assets/images/imageDefault2.png";
import photo3 from "../../assets/images/player3.jpg";
import photo4 from "../../assets/images/player4.jpg";
import photo5 from "../../assets/images/player5.jpg";
import photo6 from "../../assets/images/player6.jpg";
import photo7 from "../../assets/images/player7.jpg";
import photo8 from "../../assets/images/player8.jpg";
import photo9 from "../../assets/images/player9.jpg";

import { useState } from "react";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import Navbar from "../../Components/NavBarTop/Navbar";
import { IoArrowBack, IoSearchCircleOutline, IoSearchSharp } from "react-icons/io5";
import { HiMiniUser } from "react-icons/hi2";
import { RiShieldStarLine } from "react-icons/ri";

export function Groups() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Groups">
            <Navbar />
            
            <div className="aside">
                <ToolsLeft menu={"Grupos"}/>
                
                <div className="asideGroups">
                    <div className="title">
                         <IoArrowBack />
                         <h3>Grupos</h3>
                    </div>
                    <div className="searchGroups">
                        <IoSearchSharp />
                        <input type="text" placeholder="Faça sua busca"/>
                    </div>
                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo2} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Doentes por futebol</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    
                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo3} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Melhores lances do futebol</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo4} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Futebol histórico</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo5} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Amantes por volei</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo6} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Esportes olimpicos</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo7} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Ginástica brasileira</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo8} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Meninas ginastas</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Volei de praia - Grupo de fãns</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                    <div className="GroupUnic">
                        <div className="image">
                         <img src={photo9} alt="" />
                        </div>
                        <div className="infos">
                              <h3>Natação Olimpica</h3>
                              <h6>Grupo para discussão sobre futebol entre pessoas com opiniões diferentes</h6>
                                   <div className="infosDouble">
                                        <h5><RiShieldStarLine />Grupo aberto</h5>
                                        <h5><HiMiniUser />2.580 Membros</h5>
                                   </div>
                                        <a href="#">Entrar no grupo</a>
                        </div>
                    </div>

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}