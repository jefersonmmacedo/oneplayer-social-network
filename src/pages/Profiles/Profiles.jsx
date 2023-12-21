import { CardProfile } from "../../Components/CardProfile/CardProfile";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";

import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";

import "./profiles.css";

export function Profiles() {

    return (
        <div className="Profiles">
            <div className="aside">
                <ToolsLeft menu={"Feed"}/>
                <CardProfile />
                <SearchTrending />
            </div>
            {/* <Footer/> */}
        </div>
    )
}