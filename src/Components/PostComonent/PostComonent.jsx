import "./postComonent.css";
import { HiPlusCircle } from "react-icons/hi";
import logo from "../../assets/images/user.png";

export function PostComonent() {
    return (
        <div className="PostComonent">
            <img src={logo}alt="" />
        <input type="text" placeholder="O que deseja compatilhar hoje?"/>
        <HiPlusCircle />
        </div>
    )
}