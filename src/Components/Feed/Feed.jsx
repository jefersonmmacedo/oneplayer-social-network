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
        {text: `Em Dezembro de 2023, a TV Globo ja havia garantido a arrecadação de R$ 1,560 Bilhão somente para transmissões de jogos do Brasileirão e da Copa do Brasil.

Fonte: https://f5.folha.uol.com.br/televisao/2023/12/hypera-pharma-e-nivea-nao-renovam-e-deixam-de-patrocinar-futebol-na-globo-em-2024.shtml`},        
        {text: `Em Dezembro de 2023, a TV Globo ja havia garantido a arrecadação de R$ 1,560 Bilhão somente para transmissões de jogos do Brasileirão e da Copa do Brasil.

Fonte: https://f5.folha.uol.com.br/televisao/2023/12/hypera-pharma-e-nivea-nao-renovam-e-deixam-de-patrocinar-futebol-na-globo-em-2024.shtml`},        
        {text: `Ranking dos clubes com maior número de torcedores

Flamengo: 46,9 milhões de torcedores (21,9%)
Corinthians: 30,4 milhões de torcedores (14,2%)
São Paulo: 21,2 milhões de torcedores (9,9%)
Palmeiras: 16,5 milhões de torcedores (7,7%)
Vasco: 13,2 milhões de torcedores (6,2%)
Cruzeiro: 13 milhões de torcedores (6,1%)
Grêmio: 9,8 milhões de torcedores (4,6%)
Atlético-MG: 9,2 milhões de torcedores (4,3%)
Bahia: 7,7 milhões de torcedores (3,6%)
Internacional: 7,5 milhões de torcedores (3,5%)
Fluminense: 7,2 milhões de torcedores (3,4%)
Santos: 6,6 milhões de torcedores (3,1%)
Botafogo: 4,2 milhões de torcedores (2%)
Sport: 4 milhões de torcedores (1,9%)`},        
        {text: `As 10 redes sociais mais usadas no Brasil em 2023

WhatsApp - 169 milhões de usuários (Fonte: We Are Social e Meltwater)
YouTube - 142 milhões de usuários (Fonte: Youtube/Google)
Instagram - 113,5 milhões de usuários (Fonte: We Are Social e Meltwater)
Facebook - 109 milhões de usuários (Fonte: Facebook/Meta)

Forbes: Brasil é o terceiro maior consumidor de redes sociais em todo o mundo
Ainda de acordo com a Comscore, YouTube, Facebook e Instagram são as redes mais acessadas pelos usuários brasileiros, com alcance de 96,4%, 85,1% e 81,4%, respectivamente

Leia mais em: https://forbes.com.br/forbes-tech/2023/03/brasil-e-o-terceiro-pais-que-mais-consome-redes-sociais-em-todo-o-mundo/`},        
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
            <PostItem text={texts[12].text} media={"https://agenciatigris.com.br/wp-content/uploads/2022/04/conteudo-para-as-redes-sociais.jpg"}/>
            <PostItem text={texts[9].text} media={"https://i.ytimg.com/vi/UFd-xF2TyQE/maxresdefault.jpg"}/>
            <PostItem text={texts[10].text} media={"https://amazonasatual.com.br/wp-content/uploads/2023/01/Casas-de-apostas.jpg"}/>
            <PostItem text={texts[11].text} media={"https://i.superesportes.com.br/8QrVk0NspZhH0sTw62gcNoNn6Cg=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/10/27/3945073/20211027114814449629o.png"}/>
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