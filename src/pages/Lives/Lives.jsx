import "./lives.css";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import video from "../../assets/videos/post.mp4";
import video2 from "../../assets/videos/post2.mp4";
import video3 from "../../assets/videos/post3.mp4";
import video4 from "../../assets/videos/post4.mp4";
import video5 from "../../assets/videos/post5.mp4";
import video6 from "../../assets/videos/post6.mp4";
import video9 from "../../assets/videos/post.mp4";
import video8 from "../../assets/videos/post2.mp4";
import video10 from "../../assets/videos/post3.mp4";
import { useState } from "react";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { LivesItem } from "../../Components/LivesItem/LivesItem";
import Navbar from "../../Components/NavBarTop/Navbar";
import { IoArrowBack, IoSearchSharp } from "react-icons/io5";

export function Lives() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Lives">
           
            <div className="aside">
                <ToolsLeft menu={"Lives"}/>
                
                <div className="asideLives">

                <div className="title">
                         <IoArrowBack />
                         <h3>Lives ao vivo</h3>
                    </div>
                    <div className="searchGroups">
                        <IoSearchSharp />
                        <input type="text" placeholder="Faça sua busca"/>
                    </div>


                <LivesItem text="Mergulho espetacular do nadador aposentado @pauljackson. #mergulho #natacao" media={video}/>
                <LivesItem text="Pedalada de leve para relaxar antes das competições nacionais" media={video2}/>
                <LivesItem text="Vídeo F0D@ feito pelo designer @douglasjk" media={video3}/>
                <LivesItem text="Você pularia?" media={video4}/>
                <LivesItem text="Cardio do dia, saiba os beneficios desse exercício" media={video5}/>
                <LivesItem text="Musculação leve" media={video6}/>
                <LivesItem text="Jogos de inverso iniciando por aqui" media={video8}/>
                <LivesItem text="Cachoeira para relaxar" media={video9}/>
                <LivesItem text="Cavalos da competição nacional de Equitação" media={video10}/>

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}