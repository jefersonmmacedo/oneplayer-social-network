import "./momentsItem.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiChat1, CiSaveDown2 } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import photo from "../../assets/images/default.png";
import { ProfileComponent } from "../ProfileComponent/ProfileComponent";
import { MdStadium } from "react-icons/md";
import { IoCalendarOutline, IoLocateOutline, IoLocationOutline } from "react-icons/io5";

export function MomentsItem({text,media}) {
    console.log(media);
    return (
        <div className="MomentsItem">
            <div className="media">
                <ProfileComponent avatar={photo} name={"Jeferson Macedo"} username={"jefersonmmacedo"} live={false}/>

                <div className="InfosMoments">
                        <h4>FlaxFlu 1 Jogo Final Carioca 2024</h4>
                        <div className="doubleInfosMoments">
                       
                            <h5> <MdStadium /> Maracanã</h5>
                            
                            <h5><IoLocationOutline /> Maracanã - Rio de Janeiro</h5>
                            
                            <h5><IoCalendarOutline /> 05/04/2024</h5>
                        </div>

                        <p>{text}</p>
                    </div>


                <div className="MomentsMedia">
                                <div className="mediaMoments">
                                    <video src={media[0]} ></video>
                                </div>
                                <div className="mediaMoments">
                                    <img src={media[1]} alt="" />
                                </div>
                                <div className="mediaMoments">
                                    <video src={media[2]} ></video>
                                </div>
                                <div className="mediaMoments">
                                    <img src={media[3]} alt="" />
                                </div>
                            </div>
            <div className="userMedia">
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