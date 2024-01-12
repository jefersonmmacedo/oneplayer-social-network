import { CiSaveDown2 } from "react-icons/ci";
import "./searchTrending.css";
import { IoCalendarOutline, IoChatbubbleEllipsesOutline, IoHeart, IoHeartOutline, IoSearchSharp } from "react-icons/io5";
import { HiCheckBadge } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import photo from "../../assets/images/default.png";
import photo2 from "../../assets/images/default2.png";
import photo3 from "../../assets/images/default3.png";
import photo4 from "../../assets/images/default4.png";



export function SearchTrending() {
    return (
        <div className="SearchTrending">
            <div className="buttonsSearching">
                <a href="#"><IoCalendarOutline /></a>
                <a href="/salvos"><CiSaveDown2 /></a> 
                <a href="#"><IoHeartOutline /></a>
                <a href="#"><IoChatbubbleEllipsesOutline /></a>
            </div>
            <div className="search">
                <IoSearchSharp />
                <input type="text" placeholder="O está buscando?"/>
            </div>

            <div className="asideTrending">
                <h5>Próximos eventos</h5>

                <div className="events">
                    <div className="eventUnic">
                        <h6>Nenhum evento adicionado</h6>
                        <a href="#">Adicionar novo evento</a>
                    </div>
                </div>
            </div>
            <div className="asideTrending">
                <h5>O que está acontecendo</h5>
                <div className="topics">
                    <div className="topicUnic">
                        <div className="textsTopics">
                            <h6>Olimpiadas - Assuntos do momento</h6>
                            <h5>#voleifeminino</h5>
                            <h6>2.487 posts</h6>
                        </div>

                       <SlOptionsVertical />
                    </div>
                    <div className="topicUnic">
                        <div className="textsTopics">
                            <h6>Neymar - Assuntos do momento</h6>
                            <h5>#cruzeirodoneymar</h5>
                            <h6>5.487 posts</h6>
                        </div>

                       <SlOptionsVertical />
                    </div>
                    <div className="topicUnic">
                        <div className="textsTopics">
                            <h6>Libertadores - Assuntos do momento</h6>
                            <h5>#fluminense</h5>
                            <h6>5.487 posts</h6>
                        </div>

                       <SlOptionsVertical />
                    </div>
                    <div className="topicUnic">
                        <div className="textsTopics">
                            <h6>Mundial de clubes - Assuntos do momento</h6>
                            <h5>#cityxflu</h5>
                            <h6>5.487 posts</h6>
                        </div>

                       <SlOptionsVertical />
                    </div>
                </div>
            </div>
            <div className="asideTrending">
                <h5>Sugestão para seguir</h5>

                <div className="usersList">

                    <div className="userUnic">
                        <div className="blockUser">

                        <img src={photo} alt="" />
                            <div className="username">
                        <h6>Jeferson Macedo</h6>
                        <span>jefersonmmacedo</span>

                            </div>

                        <HiCheckBadge />
                        </div>
                        <button>+ Seguir</button>
                    </div>
                    

                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo2} alt="" />
                            <div className="username">
                        <h6>Bruno Motta</h6>
                        <span>bmottaefg</span>

                            </div>

                        <HiCheckBadge />
                    </div>
                        <button>+ Seguir</button>
                    </div>

                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo3} alt="" />
                            <div className="username">
                        <h6>Ana Souza</h6>
                        <span>souzaaninha</span>

                            </div>

                        <HiCheckBadge />
                    </div>
                        <button>+ Seguir</button>
                    </div>

                    <div className="userUnic">
                        <div className="blockUser">
                        <img src={photo4} alt="" />
                            <div className="username">
                        <h6>Marcos Baraga</h6>
                        <span>bragamarcosmkt</span>
                            </div>

                        <HiCheckBadge />
                        </div>
                        <button>+ Seguir</button>
                    </div>

                </div>
            </div>
        </div>
    )
}