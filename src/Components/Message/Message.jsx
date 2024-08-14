import "./message.css";
import { useState } from "react";
import photo from "../../assets/images/default.png";
import photo2 from "../../assets/images/default2.png";
import photo3 from "../../assets/images/default3.png";
import photo4 from "../../assets/images/default4.png";
import { HiCheckBadge } from "react-icons/hi2";
import { IoSendOutline } from "react-icons/io5";

export function Message() {
    const [section, setSection] = useState("Message");

    return (
        <div className="Message">
            <div className="MessageUnic">

                <div className="MyMessage">
                    <div className="blockUser">

                    <img src={photo} alt="" />
                        <div className="username">
                    <h5>Bruno Motta <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="YouMessage">
                    <div className="blockUser">

                    <img src={photo3} alt="" />
                        <div className="username">
                    <h5>Bianca Souza <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="MyMessage">
                    <div className="blockUser">

                    <img src={photo} alt="" />
                        <div className="username">
                    <h5>Bruno Motta <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="YouMessage">
                    <div className="blockUser">

                    <img src={photo3} alt="" />
                        <div className="username">
                    <h5>Bianca Souza <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="MyMessage">
                    <div className="blockUser">

                    <img src={photo} alt="" />
                        <div className="username">
                    <h5>Bruno Motta <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="YouMessage">
                    <div className="blockUser">

                    <img src={photo3} alt="" />
                        <div className="username">
                    <h5>Bianca Souza <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="MyMessage">
                    <div className="blockUser">

                    <img src={photo} alt="" />
                        <div className="username">
                    <h5>Bruno Motta <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
                <div className="YouMessage">
                    <div className="blockUser">

                    <img src={photo3} alt="" />
                        <div className="username">
                    <h5>Bianca Souza <HiCheckBadge /></h5>
                    <span>Estou esperando sua ligação. Va...</span>

                    </div>
                    </div>
                </div>
            </div>

            <div className="Postmessage">
                <textarea name="" id=""></textarea>
                <button><IoSendOutline/></button>
            </div>

        </div>
    )
}