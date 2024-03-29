import "./saves.css";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import video from "../../assets/videos/reels.mp4";
import video2 from "../../assets/videos/reels2.mp4";
import video3 from "../../assets/videos/reels3.mp4";
import video4 from "../../assets/videos/reels4.mp4";
import video5 from "../../assets/videos/reels5.mp4";
import video6 from "../../assets/videos/reels6.mp4";
import video7 from "../../assets/videos/reels7.mp4";
import video8 from "../../assets/videos/reels8.mp4";
import video9 from "../../assets/videos/reels9.mp4";
import video10 from "../../assets/videos/reels10.mp4";
import photo from "../../assets/images/imageDefault.png";
import photo2 from "../../assets/images/imageDefault2.png";
import photo3 from "../../assets/images/player3.jpg";
import photo4 from "../../assets/images/player4.jpg";
import photo5 from "../../assets/images/player5.jpg";
import photo6 from "../../assets/images/player6.jpg";
import photo7 from "../../assets/images/player7.jpg";
import photo8 from "../../assets/images/player8.jpg";
import photo9 from "../../assets/images/player9.jpg";
import videoPost from "../../assets/videos/post.mp4";
import videoPost2 from "../../assets/videos/post2.mp4";
import videoPost3 from "../../assets/videos/post3.mp4";
import videoPost4 from "../../assets/videos/post4.mp4";
import videoPost5 from "../../assets/videos/post5.mp4";
import videoPost6 from "../../assets/videos/post6.mp4";
import { useState } from "react";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { Reelstem } from "../../Components/Reels/Reelstem";
import Navbar from "../../Components/NavBarTop/Navbar";
import { IoSearchCircleOutline, IoSearchSharp } from "react-icons/io5";

export function Saves() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Saves">
            <Navbar />
            
            <div className="aside">
                <ToolsLeft menu={"Explorar"}/>
                
                <div className="asideSaves">

                    <div className="blockSaves">
                         <video src={video} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video2} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo2} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost2} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video3} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo3} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost3} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video4} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo4} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost4} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video5} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo5} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost5} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video6} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo6} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost6} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video2} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo2} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost2} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video3} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo3} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost3} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video4} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo4} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost4} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video5} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo5} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost5} ></video>
                    </div>
                    <div className="blockSaves">
                         <video src={video6} ></video>
                    </div>
                    <div className="blockSaves">
                         <img src={photo6} alt="" />
                    </div>
                    <div className="blockSaves">
                        <video src={videoPost6} ></video>
                    </div>
                </div>

                <SearchTrending />
            </div>
        </div>
    )
}