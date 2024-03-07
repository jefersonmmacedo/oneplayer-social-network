import "./cardNotifications.css";
import { HiCheckBadge } from "react-icons/hi2";
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
import { IoArrowBack } from "react-icons/io5";
export function CardNotifications() {
    const [section, setSection] = useState("Pessoas");

    return (
        <div className="CardNotifications">
            
            <div className="blockNotifications">
            <h4><IoArrowBack /> Notificações</h4>

            <div className="listNotifications">
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo} alt="" />

                        <div className="usernameNotifications">
                            <h5>Juliana Bonfim <HiCheckBadge /></h5>
                            
                            <h6><span>Começou a seguir você</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo2} alt="" />

                        <div className="usernameNotifications">
                            <h5>Juninho Barbosa <HiCheckBadge /></h5>
                            <h6><span>Comentou em uma publicação que você segue</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo3} alt="" />

                        <div className="usernameNotifications">
                            <h5>Pedro Lisboa <HiCheckBadge /></h5>
                            <h6><span>Curtiu seu comentário</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo4} alt="" />

                        <div className="usernameNotifications">
                            <h5>Futebol M1l Gr@u <HiCheckBadge /></h5>
                            <h6>futmilgr@u</h6>
                            <h6><span>Torcedor</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo5} alt="" />

                        <div className="usernameNotifications">
                            <h5>Amantes de Volei <HiCheckBadge /></h5>
                            <h6>amantesdevolei</h6>
                            <h6><span>Torcedor</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo6} alt="" />

                        <div className="usernameNotifications">
                            <h5>Juliana Bonfim <HiCheckBadge /></h5>
                            <h6>jubonfimvolei</h6>
                            <h6><span>Atleta/Atleta profissional</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo7} alt="" />

                        <div className="usernameNotifications">
                            <h5>Clarinha Flores <HiCheckBadge /></h5>
                            <h6>clarinhaginasticaflor</h6>
                            <h6><span>Torcedora</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo8} alt="" />

                        <div className="usernameNotifications">
                            <h5>Bruna Souza <HiCheckBadge /></h5>
                            <h6>brunasouzaginasta</h6>
                            <h6><span>Atleta/Atleta profissional</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
                <div className="unicNotifications">
                    <div className="imageNameNotifications">
                        <img src={photo9} alt="" />

                        <div className="usernameNotifications">
                            <h5>Cesar Prates <HiCheckBadge /></h5>
                            <h6>cesarpratesofc</h6>
                            <h6><span>Atleta/Atleta profissional</span></h6>
                        </div>

                        
                    </div>

                    <button>+ Seguir</button>
                </div>

                
    


            </div>

            </div>
        </div>
    )
}