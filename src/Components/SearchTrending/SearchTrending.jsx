import "./searchTrending.css";
import { IoSearchSharp } from "react-icons/io5";

export function SearchTrending() {
    return (
        <div className="SearchTrending">
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