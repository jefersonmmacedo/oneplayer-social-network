import { PostComponent } from "../PostComponent/PostComponent";
import { PostItem } from "../PostItem/PostItem";
import photo from "../../assets/images/imageDefault.png";
import photo2 from "../../assets/images/imageDefault2.png";
import photo3 from "../../assets/images/player3.jpg";
import photo4 from "../../assets/images/player4.jpg";
import photo5 from "../../assets/images/player5.jpg";
import photo6 from "../../assets/images/player6.jpg";
import photo7 from "../../assets/images/player7.jpg";
import photo8 from "../../assets/images/player8.jpg";
import photo9 from "../../assets/images/player9.jpg";
import video from "../../assets/videos/post.mp4";
import video2 from "../../assets/videos/post2.mp4";
import video3 from "../../assets/videos/post3.mp4";
import video4 from "../../assets/videos/post4.mp4";
import video5 from "../../assets/videos/post5.mp4";
import video6 from "../../assets/videos/post6.mp4";
import "./feed.css";
import { useState } from "react";

export function Feed() {
    const [section, setSection] = useState("Feed");

    console.log(video6)

    if (photo.includes(".png")) {
        console.log("olá mundo")
    }
    if (photo3.includes(".jpg")) {
        console.log("olá a todos")
    }
    const texts = [
        {text: "A melhor partida de volei de praia que ja vi!!!"},
        {text: "Força, foco e fé!"},        
        {text: "A alegria do gol, de quem lutou uma vida para estar em campo neste momento mágico para seuclube"},        
        {text: "Classificados"},        
        {text: "A final de volei se inicia, acompanhe com a gente!"},        
        {text: "O mais bonito centro esportivo do mundo"},        
        {text: "A criança e seu sonho"},        
        {text: "Brilho e leveza"},        
        {text: "O homem peixe, nadando para a vitória!"},        
    ]


    function handleSelectSection(data) {
        console.log(data)
        setSection(data)
    }
    return (
        <div className="Feed">
            <div className="buttonsFeed">
                <a href="/" className={"select"}>Feed</a>
                <a href="/perfis" className={""}>Pessoas</a>
                <a href="/trending" className={""}>Trending</a>
            </div>

          
            <PostComponent />
            <PostItem text={texts[0].text} media={"https://upcdn.io/W142hX6/raw/uploads/2024/01/23/184069 (720p)-6Eh3.mp4"}/>
            <PostItem text={texts[6].text} media={photo7}/>
            <PostItem text={texts[1].text} media={video2}/>
            <PostItem text={texts[2].text} media={video3}/>
            <PostItem text={texts[7].text} media={photo8}/>
            <PostItem text={texts[3].text} media={video4}/>
            <PostItem text={texts[4].text} media={video5}/>
            <PostItem text={texts[8].text} media={photo9}/>
            <PostItem text={texts[5].text} media={video6}/>
            
         

        </div>
    )
}