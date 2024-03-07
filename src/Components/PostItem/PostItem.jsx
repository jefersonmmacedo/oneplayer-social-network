import "./postItem.css";
import { HiCheckBadge } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import photo from "../../assets/images/default.png";
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { BsSend } from "react-icons/bs";
import imageDefault from "../../assets/images/imageDefault.png";
import { CiSaveDown2 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";
import ReactPlayer from 'react-player/vimeo'
import { ProfileComponent } from "../ProfileComponent/ProfileComponent";


export function PostItem({text, media}) {
    return (
        <div className="PostItem">
            <div className="post">
                <ProfileComponent avatar={photo} name={"Jeferson Macedo"} username={"jefersonmmacedo"} live={false}/>
            <div className="text">
               <p>{text}</p>
            </div>
            <div className="media">
                {media?.includes(".png") || media?.includes(".jpg") ?
                    <img src={media} alt="" />
                    :
                <video src={media} controls></video>
                 }

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
                <button>
                    <TbArrowsExchange /> 517
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
    )
}