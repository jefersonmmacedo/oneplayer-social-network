import { Feed } from "../../Components/Feed/Feed";
import { FooterMobile } from "../../Components/FooterMobile/FooterMobile";
import { ListMessages } from "../../Components/ListMessages/ListMessages";
import { Message } from "../../Components/Message/Message";
import Navbar from "../../Components/NavBarTop/Navbar";
import { SearchTrending } from "../../Components/SearchTrending/SearchTrending";

import { ToolsLeft } from "../../Components/ToolsLeft/ToolsLeft";

import "./messagesChat.css";

export function MessagesChat() {

    return (
        <div className="MessagesChat">

            <div className="aside">
                <ToolsLeft menu={"Feed"}/>
                <Message />
                <ListMessages />
            </div>
           
        </div>
    )
}