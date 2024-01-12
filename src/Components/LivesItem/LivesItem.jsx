import "./livesItem.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiChat1, CiSaveDown2 } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import photo from "../../assets/images/default.png";
import { ProfileComponent } from "../ProfileComponent/ProfileComponent";

export function LivesItem({text,media}) {
    return (
        <div className="LivesItem">
            <div className="media">
                <video src={media} ></video>
            <div className="userMedia">
                <div className="infosUserMedia">
                <ProfileComponent avatar={photo} name={"Jeferson Macedo"} username={"jefersonmmacedo"} live={true}/>

                    <div className="textUser">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="reactions">
                    <button>
                        <AiOutlineLike /> 10K
                    </button>
                    {/* <button>
                        <AiOutlineDislike /> 5K
                    </button> */}
                    <button>
                        <CiChat1 /> 4K
                    </button>
                    {/* <button>
                        <TbArrowsExchange /> 517
                    </button> */}
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