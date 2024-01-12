import "./Moments.css";
import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";
import { useState } from "react";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";
import { MomentsItem } from "../../Components/MomentsItem/MomentsItem";
import Navbar from "../../Components/NavBarTop/Navbar";
import { IoArrowBack, IoSearchSharp } from "react-icons/io5";
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

export function Moments() {
    const [section, setSection] = useState("Postagens");

    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }

    const media01 = [
        video,
        photo,
        video2,
        photo2,
    ]
    const media02 = [
        video3,
        photo3,
        video4,
        photo4,
    ]
    const media03 = [
        video5,
        photo5,
        video6,
        photo6,
    ]
    const media04 = [
        video7,
        photo7,
        video8,
        photo8,
    ]
    const media05 = [
        video9,
        photo9,
        video10,
        photo10,
    ]

    return (
        <div className="Moments">
           
            <div className="aside">
                <ToolsLeft menu={"Moments"}/>
                
                <div className="asideMoments">

                <div className="title">
                         <IoArrowBack />
                         <h3>Moments</h3>
                    </div>
                    <div className="searchGroups">
                        <IoSearchSharp />
                        <input type="text" placeholder="Faça sua busca"/>
                    </div>


                <MomentsItem text="Mergulho espetacular do nadador aposentado @pauljackson. #mergulho #natacao" media={media01}/>
                <MomentsItem text="Pedalada de leve para relaxar antes das competições nacionais" media={media02}/>
                <MomentsItem text="Vídeo F0D@ feito pelo designer @douglasjk" media={media03}/>
                <MomentsItem text="Você pularia?" media={media04}/>
                <MomentsItem text="Cardio do dia, saiba os beneficios desse exercício" media={media05}/>
                <MomentsItem text="Musculação leve" media={media01}/>
                <MomentsItem text="Jogos de inverso iniciando por aqui" media={media02}/>
                <MomentsItem text="Cachoeira para relaxar" media={media03}/>
                <MomentsItem text="Cavalos da competição nacional de Equitação" media={media04}/>

                </div>

                <SearchTrending />
            </div>
        </div>
    )
}