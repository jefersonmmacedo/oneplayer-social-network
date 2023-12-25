import "./reels.css";
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
import { useState } from "react";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { Reelstem } from "../../Components/Reels/Reelstem";

export function Reels() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    return (
        <div className="Reels">
            <div className="aside">
                <ToolsLeft menu={"Reels"}/>
                
                <div className="asideReels">
                <Reelstem text="Mergulho espetacular do nadador aposentado @pauljackson. #mergulho #natacao" media={video}/>
                <Reelstem text="Pedalada de leve para relaxar antes das competições nacionais" media={video2}/>
                <Reelstem text="Vídeo F0D@ feito pelo designer @douglasjk" media={video3}/>
                <Reelstem text="Você pularia?" media={video4}/>
                <Reelstem text="Cardio do dia, saiba os beneficios desse exercício" media={video5}/>
                <Reelstem text="Musculação leve" media={video6}/>
                <Reelstem text="Jogos de inverso iniciando por aqui" media={video8}/>
                <Reelstem text="Cachoeira para relaxar" media={video9}/>
                <Reelstem text="Cavalos da competição nacional de Equitação" media={video10}/>

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}