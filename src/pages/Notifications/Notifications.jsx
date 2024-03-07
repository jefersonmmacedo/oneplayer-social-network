import { CardNotifications } from "../../Components/CardNotifications/CardNotifications";
import { CardProfile } from "../../Components/CardProfile/CardProfile";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";

import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";

import "./notifications.css";

export function Notifications() {

    return (
        <div className="Notifications">
            <div className="aside">
                <ToolsLeft menu={"Feed"}/>
                <CardNotifications />
                <SearchTrending />
            </div>
            {/* <Footer/> */}
        </div>
    )
}