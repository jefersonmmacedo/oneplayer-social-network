import { Feed } from "../../Components/Feed/Feed";
import { FooterMobile } from "../../Components/FooterMobile/FooterMobile";
import Navbar from "../../Components/NavBarTop/Navbar";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";

import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";

import "./home.css";

export function Home() {

    return (
        <div className="Home">
           

            <div className="aside">
                <ToolsLeft menu={"Feed"}/>
                <Feed />
                <SearchTrending />
            </div>
           
        </div>
    )
}