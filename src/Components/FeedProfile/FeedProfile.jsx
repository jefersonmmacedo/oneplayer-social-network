import { PostComonent } from "../PostComonent/PostComonent";
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
import "./feedProfile.css";
import { useState } from "react";

export function FeedProfile() {
    const [section, setSection] = useState("FeedProfile");
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
        <div className="FeedProfile">

            {section === "FeedProfile" ?
           <>
            <PostComonent />
            <PostItem text={texts[0].text} img={photo}/>
            <PostItem text={texts[1].text} img={photo2}/>
            <PostItem text={texts[2].text} img={photo3}/>
            <PostItem text={texts[3].text} img={photo4}/>
            <PostItem text={texts[4].text} img={photo5}/>
            <PostItem text={texts[5].text} img={photo6}/>
            <PostItem text={texts[6].text} img={photo7}/>
            <PostItem text={texts[7].text} img={photo8}/>
            <PostItem text={texts[8].text} img={photo9}/>
           </>
           : section === "Pessoas" ?
           ""
           : section === "Trending" ?
           ""
           :
            ""}

        </div>
    )
}