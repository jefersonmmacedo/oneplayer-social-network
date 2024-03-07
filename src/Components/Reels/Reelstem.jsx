import "./reelsItem.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiChat1, CiSaveDown2 } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import photo from "../../assets/images/default.png";

export function Reelstem({text,media}) {
    return (
        <div className="Reelstem">
            <div className="media">
                <video src={media} controls></video>
            <div className="userMedia">
                <div className="infosUserMedia">
                    <div className="userImageName">
                        <img src={photo} alt="" />
                        <h5>UsernameUser</h5>

                        {/* <button>+ Seguir</button> */}
                    </div>

                    <div className="textUser">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="reactions">
                    <button>
                        <AiOutlineLike /> 10K
                    </button>
                    <button>
                        <CiChat1 /> 4K
                    </button>
                    <button>
                        <VscSend /> Enviar
                    </button>  
                    <button>
                        <CiSaveDown2 size={24} />
                    </button>    
                </div>
            </div>
            </div>
        </div>
    )
}