import { CiSaveDown2 } from "react-icons/ci";
import "./searchTrending.css";
import { IoCalendarOutline, IoChatbubbleEllipsesOutline, IoHeart, IoHeartOutline, IoSearchSharp } from "react-icons/io5";

export function SearchTrending() {
    return (
        <div className="SearchTrending">
            <div className="buttonsSearching">
                <button ><IoCalendarOutline /></button>
                <button ><CiSaveDown2 /></button> 
                <button ><IoHeartOutline /></button>
                <button ><IoChatbubbleEllipsesOutline /></button>
                
            </div>
            <div className="search">
                <IoSearchSharp />
                <input type="text" placeholder="O está buscando?"/>
            </div>

            <div className="asideTrending">
                <h5>O que está acontecendo</h5>
            </div>
        </div>
    )
}