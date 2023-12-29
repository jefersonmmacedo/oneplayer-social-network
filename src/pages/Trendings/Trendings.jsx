import { CardProfile } from "../../Components/CardProfile/CardProfile";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";

import photo from "../../assets/images/imageDefault.png";
import photo2 from "../../assets/images/imageDefault2.png";
import photo3 from "../../assets/images/player3.jpg";
import photo4 from "../../assets/images/player4.jpg";
import photo5 from "../../assets/images/player5.jpg";
import photo6 from "../../assets/images/player6.jpg";
import photo7 from "../../assets/images/player7.jpg";
import photo8 from "../../assets/images/player8.jpg";
import photo9 from "../../assets/images/player9.jpg";
import photo10 from "../../assets/images/player2.jpg";
import video from "../../assets/videos/post.mp4";
import video2 from "../../assets/videos/post2.mp4";
import video3 from "../../assets/videos/post3.mp4";
import video4 from "../../assets/videos/post4.mp4";
import video5 from "../../assets/videos/post5.mp4";
import video6 from "../../assets/videos/post6.mp4";
import video7 from "../../assets/videos/post7.mp4";
import video8 from "../../assets/videos/post8.mp4";
import video9 from "../../assets/videos/post9.mp4";
import video10 from "../../assets/videos/post10.mp4";
import video11 from "../../assets/videos/post11.mp4";
import video12 from "../../assets/videos/post12.mp4";

import "./trendings.css";

export function Trendings() {

    return (
        <div className="Trendings">
            <div className="asideTrendings">
                <ToolsLeft menu={"Trending"}/>
                    <div className="trendingsFeed">

                    <div className="buttonsTrendings">
                      <a href="/" className={""}>Feed</a>
                      <a href="/perfis" className={""}>Pessoas</a>
                      <a href="/trending" className={"select"}>Trending</a>
                    </div>

                        <div className="treindigUnic">
                            <h4>#sports  <span>2.458 posts</span></h4>
                            <div className="trendingsMedia">
                                <div className="mediaTrendings">
                                    <video src={video} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video2} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo2} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video3} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo3} alt="" />
                                </div>
                            </div>

                            <a href="#">Ver todos os posts</a>
                        </div>
                        

                        <div className="treindigUnic">
                            <h4>#olimpiadas <span>1.458 posts</span></h4>
                            <div className="trendingsMedia">
                                <div className="mediaTrendings">
                                    <video src={video4} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo4} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video5} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo5} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video6} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo6} alt="" />
                                </div>
                            </div>

                            <a href="#">Ver todos os posts</a>
                        </div>
                        

                        <div className="treindigUnic">
                            <h4>#foco&determinacao <span>458 posts</span></h4>
                            <div className="trendingsMedia">
                                <div className="mediaTrendings">
                                    <video src={video7} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo7} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video8} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo8} alt="" />
                                </div>
                                <div className="mediaTrendings">
                                    <video src={video9} ></video>
                                </div>
                                <div className="mediaTrendings">
                                    <img src={photo9} alt="" />
                                </div>
                            </div>

                            <a href="#">Ver todos os posts</a>
                        </div>
                        
                    </div>
                <SearchTrending />
            </div>
            {/* <Footer/> */}
        </div>
    )
}