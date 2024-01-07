import "./livesItem.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiChat1 } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import photo from "../../assets/images/default.png";

export function LivesItem({text,media}) {
    return (
        <div className="LivesItem">
            <div className="media">
                <video src={media} ></video>
            <div className="userMedia">
                <div className="infosUserMedia">
                    <div className="userImageName">
                        <img src={photo} alt="" />
                        <h5>UsernameUser</h5>

                        <button>Ao vivo</button>
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
                        <AiOutlineDislike /> 5K
                    </button>
                    <button>
                        <CiChat1 /> 4K
                    </button>
                    {/* <button>
                        <TbArrowsExchange /> 517
                    </button> */}
                    <button>
                        <VscSend /> Enviar
                    </button>               
                </div>
            </div>
            </div>
        </div>
    )
}