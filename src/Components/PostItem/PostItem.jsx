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


export function PostItem({text, media}) {
    console.log(media);
    return (
        <div className="PostItem">
            <div className="post">
            <div className="user">
                <div className="imageName">
                    <img src={photo} alt="" />
                        <div className="username">
                    <h5>Jeferson Macedo</h5>
                    <h6>jefersonmmacedo</h6>

                        </div>

                    <HiCheckBadge />
                    <button>+ Seguir</button>
                </div>

                <div className="info">
                    <h6>12 Dez</h6>
                    <SlOptionsVertical />
                    <CiSaveDown2 size={24} />
                </div>
            </div>
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
                <button>
                    <AiOutlineDislike /> 5K
                </button>
                <button>
                    <CiChat1 /> 4K
                </button>
                <button>
                    <TbArrowsExchange /> 517
                </button>
                <button>
                    <VscSend /> Enviar
                </button>               
            </div>

            </div>

            
        </div>
    )
}