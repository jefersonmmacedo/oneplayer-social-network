import { CiSaveDown2 } from "react-icons/ci";
import "./listMessages.css";
import { IoCalendarOutline, IoChatbubbleEllipsesOutline, IoHeart, IoHeartOutline, IoSearchSharp } from "react-icons/io5";
import { HiCheckBadge } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import photo from "../../assets/images/default.png";
import photo2 from "../../assets/images/default2.png";
import photo3 from "../../assets/images/default3.png";
import photo4 from "../../assets/images/default4.png";



export function ListMessages() {
    return (
        <div className="ListMessages">
            <div className="buttonsSearching">
                <a href="#">Caixa de Entrada</a>
                <a href="/salvos">Grupos</a> 
                <a href="#">Solicitações</a>
                <a href="/notificacoes">Arquivadas</a>
            </div>
            <div className="search">
                <IoSearchSharp />
                <input type="text" placeholder="Buscar conversa"/>
            </div>

            {/* <div className="asideTrending">
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
            </div> */}
            <div className="asideTrending">

                <div className="usersList">

                    <div className="userUnic">
                        <div className="blockUser">

                        <img src={photo} alt="" />
                            <div className="username">
                        <h6>Jeferson Macedo <HiCheckBadge /></h6>
                        <span>Opa, boa noite.Vamos jogar am...</span>

                            </div>

                        
                        </div>
                        {/* <button>Abrir</button> */}
                    </div>
                    
                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo2} alt="" />
                            <div className="username">
                        <h6>Bruno Motta <HiCheckBadge /></h6>
                        <span>Estou esperando sua ligação. Va...</span>

                            </div>

                       
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo3} alt="" />
                            <div className="username">
                        <h6>Ana Souza <HiCheckBadge /></h6>
                        <span>Fica R$ 75,00 o ingresso</span>

                            </div>

                      
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                        <div className="blockUser">
                        <img src={photo4} alt="" />
                            <div className="username">
                        <h6>Marcos Baraga <HiCheckBadge /></h6>
                        <span>Entendido meu camarada</span>
                            </div>

                        </div>
                        {/* <button>Abrir</button> */}
                    </div>
                    <div className="userUnic">
                        <div className="blockUser">

                        <img src={photo} alt="" />
                            <div className="username">
                        <h6>Jeferson Macedo <HiCheckBadge /></h6>
                        <span>Opa, boa noite.Vamos jogar am...</span>

                            </div>

                        
                        </div>
                        {/* <button>Abrir</button> */}
                    </div>
                    
                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo2} alt="" />
                            <div className="username">
                        <h6>Bruno Motta <HiCheckBadge /></h6>
                        <span>Estou esperando sua ligação. Va...</span>

                            </div>

                       
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo3} alt="" />
                            <div className="username">
                        <h6>Ana Souza <HiCheckBadge /></h6>
                        <span>Fica R$ 75,00 o ingresso</span>

                            </div>

                      
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                        <div className="blockUser">
                        <img src={photo4} alt="" />
                            <div className="username">
                        <h6>Marcos Baraga <HiCheckBadge /></h6>
                        <span>Entendido meu camarada</span>
                            </div>

                        </div>
                        {/* <button>Abrir</button> */}
                    </div>
                    <div className="userUnic">
                        <div className="blockUser">

                        <img src={photo} alt="" />
                            <div className="username">
                        <h6>Jeferson Macedo <HiCheckBadge /></h6>
                        <span>Opa, boa noite.Vamos jogar am...</span>

                            </div>

                        
                        </div>
                        {/* <button>Abrir</button> */}
                    </div>
                    
                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo2} alt="" />
                            <div className="username">
                        <h6>Bruno Motta <HiCheckBadge /></h6>
                        <span>Estou esperando sua ligação. Va...</span>

                            </div>

                       
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                    <div className="blockUser">

                        <img src={photo3} alt="" />
                            <div className="username">
                        <h6>Ana Souza <HiCheckBadge /></h6>
                        <span>Fica R$ 75,00 o ingresso</span>

                            </div>

                      
                    </div>
                        {/* <button>Abrir</button> */}
                    </div>

                    <div className="userUnic">
                        <div className="blockUser">
                        <img src={photo4} alt="" />
                            <div className="username">
                        <h6>Marcos Baraga <HiCheckBadge /></h6>
                        <span>Entendido meu camarada</span>
                            </div>

                        </div>
                        {/* <button>Abrir</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}